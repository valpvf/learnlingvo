import { Formik, Form, ErrorMessage } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Modal from "./Modal";
import {
  InputStyled,
  ModalButton,
  ModalSubtitle,
  ModalTitle,
} from "./ModalForm.styled";
import { dataModalForm } from "../assets/constant";
import { auth } from "../firebase";
import { DataState } from "../DataContext";

export const ModalForm = ({ onClose, nameForm }) => {
  const { user } = DataState();
  const isNameForm = Boolean(nameForm === "Registration");
  const data = dataModalForm(isNameForm);
  console.log("auth.curr", auth.currentUser);
  // console.log("userCred", userCred);

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{nameForm}</ModalTitle>
      <ModalSubtitle>{data.subTitle}</ModalSubtitle>

      <Formik
        initialValues={data.initial}
        validationSchema={data.TitleSchema}
        onSubmit={(values, { resetForm }) => {
          isNameForm
            ? createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log("user", user);
                })
                .then(() =>
                  updateProfile(auth.currentUser, {
                    displayName: values.displayName,
                  })
                )

                .catch((err) => console.error(err))
            : signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
              )
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  userCred((old) => ({ ...old, user }));
                  console.log("user", user);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("errorMessage", errorMessage);
                });
          // console.log("values", values);
          // const { cardTitle: title, cardDescr: description } = values;
          // const form = {
          //   title,
          //   description,
          //   priority,
          //   deadline: startDate,
          //   column,
          // };
          // if (taskId) {
          //   dispatch(
          //     editCard({
          //       id: taskId,
          //       body: {
          //         title,
          //         description,
          //         priority,
          //         deadline: startDate,
          //       },
          //       column: column,
          //     })
          //   );
          // } else {
          //   dispatch(addCard(form));
          // }

          resetForm();
          onClose();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            {isNameForm && (
              <>
                <InputStyled
                  placeholder="Name"
                  id="displayName"
                  name="displayName"
                  type="text"
                  onChange={handleChange}
                  value={values.displayName}
                />
                <ErrorMessage name="displayName" component={"p"} />
              </>
            )}
            <label htmlFor="email"></label>
            <InputStyled
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage name="email" component={"p"} />
            <label htmlFor="password"></label>
            <InputStyled
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <ErrorMessage name="password" component={"p"} />
            <ModalButton type="submit">{nameForm}</ModalButton>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
