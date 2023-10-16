import { Formik, Form, ErrorMessage } from "formik";
import Modal from "./Modal";
import {
  InputStyled,
  ModalButton,
  ModalSubtitle,
  ModalTitle,
} from "./ModalForm.styled";
import { dataModalForm } from "../assets/constant";

export const ModalForm = ({ onClose, nameForm }) => {
  const data = dataModalForm(Boolean(nameForm === "Registration"));
  return (
    <Modal onClose={onClose}>
      <ModalTitle>{nameForm}</ModalTitle>
      <ModalSubtitle>{data.subTitle}</ModalSubtitle>

      <Formik
        initialValues={data.initial}
        validationSchema={data.TitleSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
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
            {nameForm === "Registration" && (
              <>
                <InputStyled
                  placeholder="Name"
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                />
                <ErrorMessage name="name" component={"p"} />
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
