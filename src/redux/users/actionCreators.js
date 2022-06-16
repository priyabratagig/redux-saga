import { GET_USER, SET_USER, FAILED_USER, REQ_USER } from "./actionTypes";

export const getUsers = () => ({
  type: GET_USER
});
export const reqUsers = () => ({
  type: REQ_USER
});
export const setUsers = (users) => ({
  type: SET_USER,
  payload: users
});
export const failUsers = (message) => ({
  type: FAILED_USER,
  payload: message
});
