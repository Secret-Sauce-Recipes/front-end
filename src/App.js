import React from "react";
import { Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { PrivateRoute } from "./utils/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Landing from "./components/Landing";
import EditRecipe from "./components/EditRecipe";
import LoggedInLanding from "./components/LoggedInLanding";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <PrivateRoute exact path="/recipes" component={LoggedInLanding} />
      <PrivateRoute path="/recipes/add" component={AddRecipe} />
      <PrivateRoute path="/recipes/edit/:recipeID" component={EditRecipe} />
    </div>
  );
}

export default App;
