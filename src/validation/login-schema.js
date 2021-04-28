// yup schema for the login
import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("- Username is required")
    .min(6, "- Username must be at least 6 characters long"),

  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "- Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  email: yup
      .string()
      .email("- Must be a valid email address")
});