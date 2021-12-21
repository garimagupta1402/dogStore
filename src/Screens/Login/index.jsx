import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Schema from "./Schema";
import { createStyles, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SignIn }from '../../Redux/Actions/actions'
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) =>
  createStyles({
    formcontainer: {
      width: "50%",
      height: "auto",
      margin: "15rem 35rem",
    },
    nameinput: {
      width: "376px",
      height: "54px",
      border: "1px gray solid",
      borderRadius: "5px",
      padding: "0.5rem",
    },
    corp: {
      fontSize: "28px",
      fontWeight: 700,
      fontFamily: "remote-alt",
      margin: "0.5rem",
    },
    greenbtn: {
      backgroundColor: "#044236",
      width: "195px",
      padding: "2em",
      height: "40px",
      textTransform: "inherit",
      color: "white",
      position: "relative",
      "&:hover": { backgroundColor: "#044236" },
      margin: "0.5rem",
    },
    label: {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  })
);
const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const classes = useStyles();
  const Navigate= useNavigate();
  const onSubmit = (values) => {
    console.log("Submitted", values);
    const res = SignIn(values);
    console.log(res, 'value');
    // Navigate('/')
  
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema.validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className={classes.formcontainer}>
            <Typography className={classes.corp}>Login!</Typography>
            <Typography className={classes.label}>Email</Typography>
            <Field
              type="email"
              name="email"
              className={classes.nameinput}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <Typography className={classes.label}>Password</Typography>
            <Field
              className={classes.nameinput}
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handleChange}
              // value={values.password}
              // onBlur={handleBlur}
            />
            <ErrorMessage name="password">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <Button className={classes.greenbtn} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
