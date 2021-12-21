import * as Yup from "yup";


const validationSchema = () => {
  return Yup.object().shape({
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
