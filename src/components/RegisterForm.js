import React, { useState, useEffect } from "react";
import styled from "styled-components";
import schema from "../validation/login-schema";
import * as yup from "yup";

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
    <StyledDiv>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={register.username}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={register.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={register.password}
        />
        <button disabled={disabled}>Register</button>

          <div className="errors">
            {/* RENDER THE VALIDATION ERRORS HERE */}
            <div>{regFormErrors.username}</div>
            <div>{regFormErrors.email}</div>
            <div>{regFormErrors.password}</div>
          </div>
      </form>
    </StyledDiv>
  );
}
