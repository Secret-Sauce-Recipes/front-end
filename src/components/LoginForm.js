import React, { useState, useEffect }  from "react";
import schema from "../validation/login-schema";
import * as yup from "yup";

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

export default function Form() {

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
    }
        // on login submit, create credentials object and send to authenticate function
  const onSubmit = (evt) => {
    evt.preventDefault();
    loginSubmit();
  };
      
  const loginSubmit = () => {
    const loginCredentials = {
    username: loginFormValues.username.trim(),
    password: loginFormValues.password.trim(),
    };
    // authenticate login
    loginAuthenticate(loginCredentials);
  };

  // STUB TO AUTHENTICATE VIA AXIOS
  const loginAuthenticate = (loginCredentials) => {
    // axios
    //   .post("https://xxxxxx", loginCredentials)
    //   .then((res) => {
    // //    reset form
        setLoginFormValues(initialLoginValues);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     debugger;
    //   });
  };
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
          <input
            value={loginFormValues.username}
            onChange={onChange}
            name="username"
            type="text"
            placeholder="Username"
          />

          <input
            value={loginFormValues.password}
            onChange={onChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        {/* DISABLE THE BUTTON */}
        <button id="login" disabled={disabled}>Log in</button>

        <div className="errors">
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{loginFormErrors.username}</div>
          <div>{loginFormErrors.password}</div>
        </div>
      </div>
    </form>
  );
}
