import { useFormik } from "formik";
import React from "react";
import "./LoginStyles.css";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 char or less")
        .required("Firstname can't be an empty string"),
      lastName: Yup.string()
        .max(15, "Must be 15 char or less")
        .required("Firstname can't be an empty string"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1>Log In</h1>
        <TextField
          id="firstName"
          type="text"
          label="FirstName"
          variant="standard"
          fullWidth
          onBlur={formik.handleBlur}
          error={formik.errors.firstName && formik.touched.firstName && true}
          helperText={formik.touched.firstName && formik.errors.firstName}
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          id="lastName"
          label="LastName"
          variant="standard"
          fullWidth
          onBlur={formik.handleBlur}
          error={formik.errors.lastName && formik.touched.lastName && true}
          helperText={formik.touched.lastName && formik.errors.lastName}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />

        <Button
          className="btn"
          sx={{ marginY: 4 }}
          variant="contained"
          type="submit"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;
