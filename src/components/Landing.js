import React from "react";
import { Link } from 'react-router-dom';
import { StyledH2, LoginStyle, LoginFirstDiv, FormGroup } from "../style/component-styles"

import LoginForm from "./LoginForm";

const Landing = () => {
  
  return (
  <div>
    <LoginStyle>
    <FormGroup>
    <StyledH2>Secret Sauce Recipes</StyledH2>
    <p>Organize and store recipes, hide them from prying eyes</p>
    <LoginForm />
    <div>Don't have an account? Register <Link to ="/register">here.</Link></div>
    </FormGroup>
    </LoginStyle>
   </div>
  )};
export default Landing;
