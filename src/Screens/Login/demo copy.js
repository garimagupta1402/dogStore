import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};


const validationSchema= Yup.object({
  email: Yup.string().email('Invalid email format').required('Required!'),
  password:Yup.string().required("Required")
})
function Demo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log('Visited Fields', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          isRequired={true}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email  ? <div>{formik.errors.email}</div> : null}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Demo;
