import * as Yup from "yup";
console.log("asdfgh");

const validationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    mobilenumber: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    contact: Yup.string().required("Preffered mode of contact is required"),
  
  });
};

const Schema = {
  validationSchema,
};
export default Schema;
