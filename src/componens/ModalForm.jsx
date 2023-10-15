import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";
import {
  InputStyled,
  ModalButton,
  ModalSubtitle,
  ModalTitle,
} from "./ModalForm.styled";
// import uk from "date-fns/locale/uk";

// import ModalTitle from "components/ModalTitle/ModalTitle";
// import ButtonMain from "shared/components/button/Button";
// import { BlackPlusButton } from "shared/components/plusButton/PlusButtons";
// import InputField from "shared/components/inputField/InputField";
// import RadioColored from "shared/components/radioButtons/RadioColored";
// import InputErrorMessage from "shared/components/inputErrorMessage/InputErrorMessage";
// import { addCard, editCard } from "redux/task/taskOperations";
// import { getTheme } from "redux/auth/authSelectors";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   TextareaStyled,
//   SubtitleStyled,
//   LabelStyled,
//   DatePickerWrapper,
//   SpanStyled,
// } from "./ModalCard.styled";

const TitleSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z0-9_\-/.]+$/, "Forbidden symbols")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .password("Invalid password")
    .required("Required"),
});

export const ModalForm = ({
  onClose,
  // title:
  nameForm,
  btnName,
  cardTitle = "",
  cardDescription,
  currentPriority = "Without",
  deadline = false,
  column,
  taskId,
}) => {
  const subTitle =
    nameForm === "Registration"
      ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      : "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.";
  // registerLocale("en", uk);

  // const dispatch = useDispatch();
  // const theme = useSelector(getTheme);

  // const [startDate, setStartDate] = useState(
  // deadline ? new Date(deadline) : new Date()
  // );
  // const [priority, setPriority] = useState(currentPriority);

  // const compareDate = () => {
  //   const curDate = startDate.toISOString().split("T")[0];
  //   const dateNow = Date.now();
  //   const date = new Date(dateNow).toISOString().split("T")[0];
  //   return curDate === date ? true : false;
  // };

  return (
    <Modal onClose={onClose}>
      <ModalTitle>{nameForm}</ModalTitle>
      <ModalSubtitle>{subTitle}</ModalSubtitle>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={TitleSchema}
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
