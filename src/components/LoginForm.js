import React from "react";
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
// export default function Form(props) {
  // const { values, submit, change, errors } = props;

  // state for login credentials and form errors
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginFormErrors, setLoginFormError] = useState(initialLoginErrors)
  
  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const inputChange = (name, value) => {
    // RUN VALIDATION WITH YUP
    yup
      .reach(schema, name) // get to this part of the schema
      //we can then run validate using the value
      .validate(value) // validate this value
      .then(() => {
        // happy path and clear the error
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

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
    //     setLoginFormValues(initialLoginValues);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     debugger;
    //   });
  };



  return (
    <form className="form container" onSubmit={onSubmit}>
        {/* DISABLE THE BUTTON */}
        <button id="login" disabled={disabled}>Log in</button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{loginFormErrors.username}</div>
          <div>{loginFormErrors.password}</div>
        </div>

      <div className="login-inputs">
        <h4>Log In:</h4>

       {/* ////////// LOGIN TEXT INPUTS ////////// */}
        <label>
          Username&nbsp;
          <input
            value={loginValues.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Password&nbsp;
          <input
            value={loginValues.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

      </div>
    </form>
  );
}
}
