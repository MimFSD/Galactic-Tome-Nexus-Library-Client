import { DeveloperBoard, Feedback } from "@material-ui/icons";
import React from "react";

const validation = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "User Name required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "enter valid email address";
  }
  if (!values.password) {
    errors.password = "password  is required";
  } else if (values.password.length < 4) {
    errors.password = "password  should be of length 4 minimum";
  }

  if (!values.password1) {
    errors.password1 = "password  is required";
  } else if (values.password !== values.password1) {
    errors.password1 = "retype password";
  }
  return errors;
};

export default validation;
