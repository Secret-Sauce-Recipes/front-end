
 import React from "react";
 import { Route } from "react-router-dom";
 import RegisterForm from "./components/RegisterForm";
 import { PrivateRoute } from "./utils/PrivateRoute";
 import LoginForm from "./components/LoginForm";
 
 function App() {
   return <div className="App"> 
    <LoginForm />
   </div>;

}

export default App;
