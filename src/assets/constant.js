import * as Yup from "yup";

export const dataModalForm = (isNameForm) => {
  const TitleSchema = isNameForm
    ? Yup.object().shape({
        name: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z0-9_\-/.]+$/, "Forbidden symbols")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Required"),
        password: Yup.string()
          .min(6, "Too Short!")
          .required("Required"),
      })
    : Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Required"),
        password: Yup.string()
          .min(6, "Too Short!")
          .required("Required"),
      });
  const subTitle = isNameForm
    ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
    : "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.";
  const initial = isNameForm
    ? { name: "", email: "", password: "" }
    : { email: "", password: "" };
  return { TitleSchema, subTitle, initial };
};
