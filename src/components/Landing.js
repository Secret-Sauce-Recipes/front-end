import React from "react";
import { Link } from 'react-router-dom';
import LoginForm from "./LoginForm";

const Landing = () => {
  
  return (
  <div>
    <h4>Secret Sauce Recipes</h4>
    <p>Organize and store recipes, hide them from prying eyes</p>
    <LoginForm />
    <div>Don't have an account? Register <Link to ="/register">here.</Link></div>
  </div>
  )};
export default Landing;
