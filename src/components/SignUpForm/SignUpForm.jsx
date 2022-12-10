import { Button, TextField } from "@mui/material";
import React from "react";
import "./SigpUpFormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
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
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1>Sign In</h1>
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
        <TextField
          id="email"
          label="Email"
          type="text"
          variant="standard"
          fullWidth
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email && true}
          helperText={formik.touched.email && formik.errors.email }
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button
          className="btn"
          sx={{ marginY: 4 }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
