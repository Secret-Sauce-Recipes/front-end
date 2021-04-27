import axiosWithAuth from "../utils/axiosWithAuth"

export const GET_RECIPE_LOADING = 'GET_RECIPE_LOADING';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const ADD_RECIPE_LOADING = 'ADD_RECIPE_LOADING';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS'
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE'

export const DELETE_RECIPE_LOADING = 'DELETE_RECIPE_LOADING'
export const DELETE_RECIPE_SUCCESS = 'DELETE RECIPE_SUCCESS'
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE'

export const EDIT_RECIPE_LOADING = 'EDIT_RECIPE_LOADING'
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS'
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE'

export const getRecipe = () => (dispatch) => {
    dispatch({ type:GET_RECIPE_LOADING})
    axiosWithAuth()
    .get("")
    .then((res)=> dispatch({type:GET_RECIPE_SUCCESS,payload:res.data}
    ))
    .catch((err) => {
        dispatch({ type:GET_RECIPE_FAILURE,payload:err})
    })
}
export const addRecipe = () => (dispatch) => {
    dispatch({ type:ADD_RECIPE_LOADING})
    axiosWithAuth()
    .post("")
    .then((res)=> dispatch({type:ADD_RECIPE_SUCCESS,payload:res.data}
    ))
    .catch((err) => {
        dispatch({ type:ADD_RECIPE_FAILURE,payload:err})
    })
}
export const deleteRecipe = () => (dispatch) => {
    dispatch({ type:DELETE_RECIPE_LOADING})
    axiosWithAuth()
    .delete("")
    .then((res)=> dispatch({type:DELETE_RECIPE_SUCCESS,payload:res.data}
    ))
    .catch((err) => {
        dispatch({ type:DELETE_RECIPE_FAILURE,payload:err})
    })
}
export const editRecipe = () => (dispatch) => {
    dispatch({ type:EDIT_RECIPE_LOADING})
    axiosWithAuth()
    .put("")
    .then((res)=> dispatch({type:EDIT_RECIPE_SUCCESS,payload:res.data}
    ))
    .catch((err) => {
        dispatch({ type:EDIT_RECIPE_FAILURE,payload:err})
    })
}

