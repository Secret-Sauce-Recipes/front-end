import React from "react";

export default function Form(props) {
  const { values, submit, change, errors } = props;

// use submit function in props instead of default form behavior
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
        {/* DISABLE THE BUTTON */}
        <button id="login" disabled={disabled}>Log in</button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>

      <div className="login-inputs">
        <h4>Log In:</h4>

       {/* ////////// LOGIN TEXT INPUTS ////////// */}
        <label>
          Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

      </div>
    </form>
  );
}
