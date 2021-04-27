
 import React from "react";
 import { Route } from "react-router-dom";
 import RegisterForm from "./components/RegisterForm";
 import { PrivateRoute } from "./utils/PrivateRoute";
 import LoginForm from "./components/LoginForm";
 import AddRecipe from "./components/AddRecipe";
 
 function App() {
   return <div className="App"> 
    <AddForm />
   </div>;

}

export default App;
