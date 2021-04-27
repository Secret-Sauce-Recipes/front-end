import {REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/registerFormActions'

const initialState = {
    username: "",
    password: "",
    email: "",
    error: '',
    isLoading: false
};

export const registerFormReducer = ( state = initialState, action ) => {

    switch(action.type) {
        case REGISTER_LOADING:
        return {
             ...state,
             isLoading: true
            }
        case REGISTER_SUCCESS:   
         return {
             ...state,
             username: action.payload.username,
             password: action.payload.password,
             email: action.payload.email,
             isLoading: false
         }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: '',
            }
        default:
            return state
    }

}