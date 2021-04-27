import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { recipeReducer } from "./recipeReducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  recipeReducer: recipeReducer,
});
