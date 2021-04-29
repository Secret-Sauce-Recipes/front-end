import React, { useState, useEffect } from "react";
import styled from "styled-components";
import schema from "../validation/login-schema";
import * as yup from "yup";
import { LoginStyle, StyledInput, ButtonDiv, Btn, ValidationErrs } from "../style/component-styles"

const StyledDiv = styled.div``;


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
    <LoginStyle>
      <form onSubmit={submitHandler}>
        <StyledInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={register.username}
        />
        <ValidationErrs>{regFormErrors.username}</ValidationErrs>

        <StyledInput
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={register.email}
          />
          <ValidationErrs>{regFormErrors.email}</ValidationErrs>
 
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={register.password}
        />

        <ValidationErrs>{regFormErrors.password}</ValidationErrs>
        <ButtonDiv>
          <Btn disabled={disabled}>Register</Btn>
        </ButtonDiv>

          {/* RENDER THE VALIDATION ERRORS HERE */}
          {/* <style.ValidationErrs className="errors">
            <div>{regFormErrors.username}</div>
            <div>{regFormErrors.email}</div>
            <div>{regFormErrors.password}</div>
          </style.ValidationErrs> */}

      </form>
    </LoginStyle>
  );
}
