import { REQ_USER, SET_USER, FAILED_USER } from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  users: []
};

export const reducer = (preState = initialState, action) => {
  switch (action.type) {
    case REQ_USER:
      return {
        ...initialState,
        loading: true
      };
    case SET_USER:
      return {
        ...initialState,
        users: [...action.payload]
      };
    case FAILED_USER:
      return {
        ...initialState,
        error: action.payload
      };
    default:
      return { ...preState };
  }
};
