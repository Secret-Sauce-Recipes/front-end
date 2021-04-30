import React, { useState, useEffect } from 'react';
import schema from '../validation/login-schema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction';
import {
  StyledInput,
  LoginBtn,
  ValidationErrs,
  LoginFormDiv,
  LoginStyle,
} from '../style/component-styles';
import { useHistory } from 'react-router';

const initialLoginValues = {
  username: '',
  password: '',
};

const initialLoginErrors = {
  username: '',
  password: '',
};

const initialLoginDisabled = true;

const LoginForm = (props) => {
  const [loginFormValues, setLoginFormValues] = useState(initialLoginValues);
  const [loginFormErrors, setLoginFormErrors] = useState(initialLoginErrors);
  const [disabled, setDisabled] = useState(initialLoginDisabled);
  const { push } = useHistory();
  const { isLoggedIn } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0],
        });
      });
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    const loginCreds = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    };
    props.loginUser(loginCreds);
  };

  useEffect(() => {
    if (isLoggedIn) {
      push('/recipes');
    }
  }, [push, isLoggedIn]);

  useEffect(() => {
    schema.isValid(loginFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  return (
    <form className="form container" onSubmit={onSubmit}>
      <LoginStyle>
        <LoginFormDiv>
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
          <LoginBtn disabled={disabled}>Log in</LoginBtn>
        </LoginFormDiv>
      </LoginStyle>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
    password: state.userReducer.password,
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
