import * as Yup from "yup";

const validationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });
};

const Schema = {
  validationSchema,
};
export default Schema;
