import {
  GET_RECIPES_LOADING,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  ADD_RECIPE_LOADING,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  DELETE_RECIPE_LOADING,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  EDIT_RECIPE_LOADING,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILURE,
  GET_RECIPE_BY_ID_LOADING,
  GET_RECIPE_BY_ID_SUCCESS,
  GET_RECIPE_BY_ID_FAILURE,
} from "../actions/recipeActions";

const initialState = {
  error: "",
  isLoading: false,
  allRecipes: [{
   
    recipe_id: "",
    recipe_img: "",
    source: "",
    category: "",
    ingredients: "",
    instructions: "",
    recipe_name: ""

  }],
  singleRecipe: {
    
    recipe_id: "",
    recipe_img: "",
    source: "",
    category: "",
    ingredients: "",
    instructions: "",
    recipe_name: ""

  }
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        allRecipes: action.payload
      };
    case GET_RECIPES_FAILURE:
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
        allRecipes: [...state.allRecipes, action.payload]
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
        allRecipes: state.allRecipes.filter(recipe => {
          return recipe.recipe_id !== action.payload.recipe_id
        }),
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
      };
    case EDIT_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_RECIPE_BY_ID_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RECIPE_BY_ID_SUCCESS:
      return {
        ...state,
        singleRecipes: action.payload,
        isLoading: false
      }
    case GET_RECIPE_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};
