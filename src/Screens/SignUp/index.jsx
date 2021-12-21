import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Schema from "./Schema";
import { createStyles, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Register } from "../../Redux/Actions/actions";

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
  name: "",
  lastname: "",
  email: "",
  password: "",
};

export default function Signup() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  //  console.log("Visited Fields", touched);

  const onSubmit = (values) => {
    console.log("Form data", values);
    Register(values);
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
            <Typography className={classes.corp}>Sign Up!</Typography>
            <Typography className={classes.label}>Name</Typography>
            <div>
              <Field
                className={classes.nameinput}
                type="text"
                placeholder="Name"
                name="name"
              />
              <ErrorMessage name="name">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                className={classes.nameinput}
                type="text"
                placeholder="Last Name"
                name="lastname"
              />
              <ErrorMessage name="lastname">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            {/* <Typography className={classes.label}>Email</Typography> */}
            <div>
              <Field
                type="email"
                name="email"
                className={classes.nameinput}
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                className={classes.nameinput}
                type="password"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name="password">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <Button className={classes.greenbtn} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
