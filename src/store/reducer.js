import {

  ADD_USER,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
} from "./actionTypes.js";

const initState = {
  count: 0,
  users: {
    loading: false,
    data: [],
    error: false,
  },
};

export const reducer = (state = initState, { type, payload }) => {
  console.log(state);
  switch (type) {

    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case ADD_USER_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: {
          loading: false,
          data: [...state.users.data, payload],
        },
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
