import { REQ_COMMENTS, SET_COMMENTS, FAILED_COMMENTS } from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  comments: []
};

export const reducer = (preState = initialState, action) => {
  switch (action.type) {
    case REQ_COMMENTS:
      return {
        ...initialState,
        loading: true
      };
    case SET_COMMENTS:
      return {
        ...initialState,
        comments: [...action.payload]
      };
    case FAILED_COMMENTS:
      return {
        ...initialState,
        error: action.payload
      };
    default:
      return {
        ...preState
      };
  }
};
