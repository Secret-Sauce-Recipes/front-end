import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/userAction';

const initialState = {
  username: '',
  password: '',
  email: '',
  error: '',
  isLoading: false,
  user_id: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
