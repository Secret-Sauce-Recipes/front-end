import React from 'react';
import { Link } from 'react-router-dom';
import { LoginH1, LandingStyle } from '../style/component-styles';
import LoginForm from './LoginForm';

const Landing = () => {
  return (
    <div>
      <LandingStyle>
        <LoginH1>Secret Sauce Recipes</LoginH1>
        <h3>Organize and store recipes, hide them from prying eyes</h3>
        <LoginForm />
        <p>
          Don't have an account? Register <Link to="/register">here.</Link>
        </p>
      </LandingStyle>
      <div>
        <img
          width="100%"
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-hot-pot-gourmet-food-poster-image_206143.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Landing;
