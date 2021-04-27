import axiosWithAuth from '../utils/axiosWithAuth'

export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const postUser = (creds) => (dispatch) => {
    dispatch({ type: REGISTER_LOADING });
    axiosWithAuth()
    .post('', creds)
    .then((res) => dispatch({type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
        dispatch({type: REGISTER_ERROR, payload: err})
    })
}