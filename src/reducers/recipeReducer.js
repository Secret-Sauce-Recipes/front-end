import {
  GET_RECIPE_LOADING,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
  ADD_RECIPE_LOADING,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  DELETE_RECIPE_LOADING,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  EDIT_RECIPE_LOADING,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILURE,
} from "../actions/recipeActions";

const initialState = {
  error: "",
  isLoading: false,
  recipe_id: 0,
  recipe_img: "",
  source: "",
  category: "",
  ingredients: "",
  instructions: "",
  recipe_name: "",
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        recipe_id: 0,
        recipe_img: "",
        source: "",
        category: "",
        ingredients: "",
        instructions: "",
        recipe_name: "",
      };
    case GET_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_RECIPE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: [...state.recipes, action.payload],
      };
    case ADD_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_RECIPE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: [...state.recipes, action.payload],
      };
    case DELETE_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case EDIT_RECIPE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        recipes: [...state.recipes, action.payload],
      };
    case EDIT_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
