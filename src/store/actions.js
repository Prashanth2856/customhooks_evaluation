import {
  ADD_USER,
  ADD_USER_LOADING,
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./actionTypes.js";



// store
export const addUser = (todo) => ({
  type: ADD_USER,
  payload: todo,
});

export const addUserLoading = () => ({ type: ADD_USER_LOADING });
export const addUserSuccess = (data) => ({
  type: ADD_USER_SUCCESS,
  payload: data,
});
export const addUserError = (err) => ({ type: ADD_USER_ERROR });

export const getTodoLoading = () => ({ type: GET_USER_LOADING });
export const getTodoSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
export const getTodoError = (err) => ({ type: GET_USER_ERROR });
