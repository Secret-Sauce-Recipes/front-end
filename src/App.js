import React from "react";
import { Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { PrivateRoute } from "./utils/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import LoggedInLanding from "./components/LoggedInLanding";
import AddRecipe from './components/AddRecipe'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        {/* <Landing /> */}
          <AddRecipe />
      </Route>
      <Route>
        <LoginForm />
      </Route>
      <Route>
        <RegisterForm />
      </Route>
      {/* <PrivateRoute path="/loggedInLanding" component={}/> */}
    </div>
  );
}

export default App;
