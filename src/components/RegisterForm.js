import React, { useState, useEffect } from "react";
import styled from "styled-components";
import schema from "../validation/login-schema";
import * as yup from "yup";

const StyledDiv = styled.div``;

// STYLES COPIED FROM AddRecipe.js - SHOULD BE REFACTORED
//Styles
// Had to change flex-direction from PageStyle, so renamed it LoginStyles
const RegStyle = styled.div`
  box-sizing: border-box;
  background-color: #fefae0;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 15rem;
  height: 2.5vh;
  margin: 0.5rem;
  padding: 2px;
`;
const Btn = styled.button`
  //  display: flex;
  //  justify-content: center;
  background-color: #e07a5f;
  width: 10%;
  height: 5vh;
  //  align-content:center;
  //  align-items: center;
  // font-size: 1rem;
  margin: 0.5rem;
  padding: 2px;
`;

const ValidationErrs = styled.div`
  color: red;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  // border: 1px solid red;
`;

const initialValues = {
  username: "",
  password: "",
  email: "",
};

// Set initial register form error msgs empty
const initialRegErrors = {
  username: "",
  password: "",
  email: "",
}
// set login button initially disabled
const initialRegDisabled = true;

export default function RegisterForm() {
  const [register, setRegister] = useState(initialValues);
  const [regFormErrors, setRegFormErrors] = useState(initialRegErrors);
  const [disabled, setDisabled] = useState(initialRegDisabled);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
// yup validation
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      // happy path and clear the error
      setRegFormErrors({
        ...regFormErrors,
        [name]: "",
      });
    })
    // add error message each time validation unsuccessful
    .catch((err) => {
      setRegFormErrors({
        ...regFormErrors,
        // validation error from schema
        [name]: err.errors[0],
      });
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `regFormValues` CHANGES
    schema.isValid(register).then((valid) => {
      setDisabled(!valid);
    });
  }, [register]);

  return (
    <RegStyle>
      <form onSubmit={submitHandler}>
        <StyledInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={register.username}
        />
        <StyledInput
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={register.email}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={register.password}
        />
        <Btn disabled={disabled}>Register</Btn>

          <ValidationErrs className="errors">
            {/* RENDER THE VALIDATION ERRORS HERE */}
            <div>{regFormErrors.username}</div>
            <div>{regFormErrors.email}</div>
            <div>{regFormErrors.password}</div>
          </ValidationErrs>
      </form>
    </RegStyle>
  );
}
