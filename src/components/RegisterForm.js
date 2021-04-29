import React, { useState, useEffect } from 'react';
import schema from '../validation/login-schema';
import * as yup from 'yup';
import {
  LoginFormDiv,
  LoginStyle,
  StyledInput,
  ButtonDiv,
  Btn,
  ValidationErrs,
} from '../style/component-styles';
import { registerUser } from '../actions/userAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const initialValues = {
  username: '',
  password: '',
  email: '',
};

const initialRegErrors = {
  username: '',
  password: '',
  email: '',
};

const initialRegDisabled = true;

const RegisterForm = (props) => {
  const [register, setRegister] = useState(initialValues);
  const [regFormErrors, setRegFormErrors] = useState(initialRegErrors);
  const [disabled, setDisabled] = useState(initialRegDisabled);
  const { push } = useHistory();

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    const { name, value } = e.target;
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setRegFormErrors({
          ...regFormErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setRegFormErrors({
          ...regFormErrors,
          [name]: err.errors[0],
        });
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const creds = {
      username: register.username.trim(),
      email: register.email.trim(),
      password: register.password.trim(),
    };
    await props.registerUser(creds);
    push('/login');
  };
  useEffect(() => {
    schema.isValid(register).then((valid) => {
      setDisabled(!valid);
    });
  }, [register]);

  return (
    <LoginStyle>
      <LoginFormDiv>
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
        </form>
      </LoginFormDiv>
    </LoginStyle>
  );
};

export default connect(null, { registerUser })(RegisterForm);
