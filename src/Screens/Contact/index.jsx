import React from "react";
import { Formik, Form, Field} from "formik";
import Schema from "./Schema";
import { createStyles, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";




const useStyles = makeStyles((theme) =>
  createStyles({
    formcontainer: {
      width: "50%",
      height: "auto",
      margin: "10rem 30rem",
    },
    firstcontainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    secondcontainer: {
      display: "flex",
      justifyContent: "space-between",
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
    biginput: {
      width: "956px",
      height: "160px",
    },
    groupbutton: {
      display: "flex",
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
    cancelbtn: {
      backgroundColor: "transparent",
      width: "195px",
      padding: "2em",
      height: "40px",
      textTransform: "inherit",
      color: "#044236",
      position: "relative",
      "&:hover": { backgroundColor: "transparent" },
      margin: "0.5rem",
      border: "1px #044236 solid",
    },
    toggle: {
      fontSize: "16px",
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    togglebtn: {
      width: "25px",
      height: "30px",
    },
    togglesize: {
      fontSize: "16px",
      marginBottom: "1rem",
      marginTop: "1rem",
      marginLeft: "10px",
    },
    label: {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    aligntoggle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tglalign: {
      display: "flex",
      justifyContent: "space-between",
    },
    togglebuttons: {
      width: "376px",
    },
  })
);

export default function Contact() {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ name: "", mobilenumber: "", email: "", contact: "" }}
      validationSchema={Schema.validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

      }}
    >
      {(props) => (
        <Form>
          <div className={classes.formcontainer}>
            <Typography className={classes.corp}>Contact US Form</Typography>
            <div className="col-sm-12">
              <div className={classes.firstcontainer}>
                <div>
                  <Typography className={classes.label}>Name</Typography>
                  <Field
                    className={classes.nameinput}
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                    onBlur={props.handleBlur}
                    inputprops={{
                      required: false,
                    }}
                  />
                  {/* {/ {props.errors.name && touched.name ? <div>{console.log(</div>} /} */}
                </div>

                <div className="form-group">
                  <Typography className={classes.label}>Mobile</Typography>
                  <Field
                    className={classes.nameinput}
                    type="tel"
                    placeholder="Mobile number"
                    name="mobilenumber"
                    onChange={props.handleChange}
                    value={props.values.mobilenumber}
                    inputprops={{
                      required: false,
                    }}
                  />             
                </div>
              </div>
              <div className={classes.secondcontainer}>
                <div className="form-group">
                  <Typography className={classes.label}>Email</Typography>
                  <Field
                    type="email"
                    name="email"
                    className={classes.nameinput}
                    placeholder="Email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    inputprops={{
                      required: false,
                    }}
                  />
                  {/* {
                        / {errors.email && touched.email && errorMessage(errors.email)} /
                      } */}
                </div>
                <div className={classes.togglebuttons}>
                  <label className={classes.toggle}>
                    Preferred mode of contact
                  </label>
                  <br />
                  <div className={classes.tglalign}>
                    <div
                      className={`form-check form-check-inline ${classes.aligntoggle}`}
                    >
                      <Field
                        className={classes.togglebtn}
                        type="radio"
                        name="contact"
                        id="inlineRadio1"
                        onChange={props.handleChange}
                        value="call"
                        inputprops={{
                          required: false,
                        }}
                      />
                      <label
                        className={classes.togglesize}
                        htmlFor="inlineRadio1"
                      >
                        Call
                      </label>
                    </div>
                    <div
                      className={`form-check form-check-inline ${classes.aligntoggle}`}
                    >
                      <Field
                        className={classes.togglebtn}
                        type="radio"
                        name="contact"
                        id="inlineRadio2"
                        onChange={props.handleChange}
                        value="email"
                        inputprops={{
                          required: false,
                        }}
                      />
                      <label
                        className={classes.togglesize}
                        htmlFor="inlineRadio2"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  {/* {props.touched.contact && props.errors.contact && (
                    <div className="error">{props.errors.contact}</div>
                  )} */}
                </div>
              </div>

              <div>
                <Typography className={classes.label}>
                  Comments (Optional)
                </Typography>
                <Field
                  component="textarea"
                  className={classes.biginput}
                  name="About"
                />
              </div>
              <div className={classes.groupbutton}>
                <Button className={classes.cancelbtn}>Cancel</Button>
                <Button className={classes.greenbtn} type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
