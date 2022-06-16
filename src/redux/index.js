import { store } from "./store";

export { store } from "./store";
export {
  reqUsers,
  getUsers,
  setUsers,
  failUsers
} from "./users/actionCreators";
export { REQ_USER, SET_USER, FAILED_USER, GET_USER } from "./users/actionTypes";
export {
  reqCOmments,
  getComments,
  setComments,
  failComments
} from "./comments/actionCreators";
export {
  REQ_COMMENTS,
  GET_COMMENTS,
  SET_COMMENTS,
  FAILED_COMMENTS
} from "./comments/actionTypes";

export default store;
