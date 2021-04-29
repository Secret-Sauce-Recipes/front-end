import React, { useState, useEffect } from "react";
import schema from "../validation/login-schema";
import * as yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../actions/userAction";
import { LoginStyle, StyledInput, Btn, ValidationErrs, ButtonDiv, LoginFirstDiv, FormGroup } from "../style/component-styles";

// Set initial login credentials empty
const initialLoginValues = {
  username: "",
  password: "",
};

// Set initial login form error msgs empty
const initialLoginErrors = {
  username: "",
  password: "",
};

// set login button initially disabled
const initialLoginDisabled = true;

const LoginForm = () => {

  // state for login credentials and form errors
  const [loginFormValues, setLoginFormValues] = useState(initialLoginValues);
  const [loginFormErrors, setLoginFormErrors] = useState(initialLoginErrors);
  const [disabled, setDisabled] = useState(initialLoginDisabled);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const inputChange = (name, value) => {
    // RUN VALIDATION WITH YUP
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        // happy path and clear the error
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: "",
        });
      })
      // add error message each time validation unsuccessful
      .catch((err) => {
        setLoginFormErrors({
          ...loginFormErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });
    // finally, update form values with the change
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };
  // on login submit, create credentials object and send to authenticate function
  const onSubmit = (evt) => {
    evt.preventDefault();

    const loginCreds = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    };
    loginUser(loginCreds);
  };

  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `loginFormValues` CHANGES
    schema.isValid(loginFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  return (
    <form className="form container" onSubmit={onSubmit}>
      {/* <div className="login-inputs"> */}
        {/* ////////// LOGIN TEXT INPUTS ////////// */}
        {/* <LoginStyle> */}
          {/* <FormGroup> */}
          <LoginFirstDiv>
          <StyledInput
            value={loginFormValues.username}
            onChange={onChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <ValidationErrs>{loginFormErrors.username}</ValidationErrs>

          <StyledInput
            value={loginFormValues.password}
            onChange={onChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <ValidationErrs>{loginFormErrors.password}</ValidationErrs>
          </LoginFirstDiv>


          {/* DISABLE THE BUTTON */}
          <ButtonDiv>
            <Btn disabled={disabled}>
              Log in
            </Btn>
          </ButtonDiv>
        {/* </FormGroup> */}
        {/* </LoginStyle> */}
   </form>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
