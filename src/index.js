import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";


import App from "./App";

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
