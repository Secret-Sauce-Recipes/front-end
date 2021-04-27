import {combineReducers} from 'redux';
import registerFormReducer from "./registerFormReducer"

export const rootReducer = combineReducers({
    registerForm: registerFormReducer
})