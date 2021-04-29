import React from 'react';
import { Link } from 'react-router-dom';
import { StyledH2, LandingStyle} from '../style/component-styles';

import LoginForm from './LoginForm';

const Landing = () => {
  return (
    <div>
      <LandingStyle>
        {/* <FormGroup> */}
        <StyledH2>Secret Sauce Recipes</StyledH2>
        {/* <h2>Secret Sauce Recipes</h2> */}
        <p>Organize and store recipes, hide them from prying eyes</p>
        <LoginForm />
        <p>
          Don't have an account? Register <Link to="/register">here.</Link>
        </p>
        {/* </FormGroup> */}
      </LandingStyle>
    </div>
  );
};
export default Landing;
