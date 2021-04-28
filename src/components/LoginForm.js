import React, { useState, useEffect } from "react";
import schema from "../validation/login-schema";
import * as yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../actions/userAction";
import style from "../style/component-styles"

// import styled from "styled-components";

// // STYLES COPIED FROM AddRecipe.js - SHOULD BE REFACTORED
// //Styles
// // Had to change flex-direction from PageStyle, so renamed it LoginStyles
// const LoginStyle = styled.div`
//   box-sizing: border-box;
//   background-color: #fefae0;
//   width: 100%;
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
// const StyledInput = styled.input`
//   width: 15rem;
//   height: 2.5vh;
//   margin: 0.5rem;
//   padding: 2px;
// `;
// const Btn = styled.button`
//   //  display: flex;
//   //  justify-content: center;
//   background-color: #e07a5f;
//   width: 10%;
//   height: 5vh;
//   //  align-content:center;
//   //  align-items: center;
//   // font-size: 1rem;
//   margin: 0.5rem;
//   padding: 2px;
// `;

// const ValidationErrs = styled.div`
//   color: red;
//   font-family: sans-serif;
//   font-size: 1rem;
//   font-weight: bold;
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   margin: 0 auto;
//   justify-content: center;
//   // border: 1px solid red;
// `;

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
  // export default function Form(props) {
  // const { values, submit, change, errors } = props;

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

  // const loginSubmit = () => {
  //   const loginCredentials = {
  //     username: loginFormValues.username.trim(),
  //     password: loginFormValues.password.trim(),
  //   };
  //   // authenticate login
  //   loginAuthenticate(loginCredentials);
  // };

  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `loginFormValues` CHANGES
    schema.isValid(loginFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="login-inputs">
        {/* ////////// LOGIN TEXT INPUTS ////////// */}
        <style.LoginStyle>
          <style.StyledInput
            value={loginFormValues.username}
            onChange={onChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <style.ValidationErrs>{loginFormErrors.username}</style.ValidationErrs>

          <style.StyledInput
            value={loginFormValues.password}
            onChange={onChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <style.ValidationErrs>{loginFormErrors.password}</style.ValidationErrs>


          {/* DISABLE THE BUTTON */}
          <style.Btn disabled={disabled}>
            Log in
          </style.Btn>

          {/* RENDER THE VALIDATION ERRORS HERE */}
          {/* <style.ValidationErrs className="errors">
            <div>{loginFormErrors.username}</div>
            <div>{loginFormErrors.password}</div>
          </style.ValidationErrs> */}
        </style.LoginStyle>
      </div>
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
