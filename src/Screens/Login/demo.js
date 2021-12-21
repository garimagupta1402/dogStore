import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().required("Required"),
});
function Demo() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div">
          {(errorMsg) => <div className="error">{errorMsg}</div>}
        </ErrorMessage>
        <Field type="password" placeholder="Password" name="password" />
        <ErrorMessage name="password">
          {(errorMsg) => <div className="error">{errorMsg}</div>}
        </ErrorMessage>
        <button>Submit</button>
      </Form>
    </Formik>
  );
}
export default Demo;
