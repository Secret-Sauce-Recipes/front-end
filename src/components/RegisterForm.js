import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const initialValues = {
  username: "",
  password: "",
  email: "",
};

export default function RegisterForm() {
  const [register, setRegister] = useState(initialValues);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
        <button>Submit</button>
      </form>
    </StyledDiv>
  );
}
