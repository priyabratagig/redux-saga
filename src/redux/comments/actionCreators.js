import { GET_COMMENTS, SET_COMMENTS, FAILED_COMMENTS } from "./actionTypes";

export const getComments = () => ({
  type: GET_COMMENTS
});
export const setComments = (Comments) => ({
  type: SET_COMMENTS,
  payload: Comments
});
export const failComments = (message) => ({
  type: FAILED_COMMENTS,
  payload: message
});
