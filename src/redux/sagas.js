import { put, takeLatest } from "redux-saga/effects";
import { setUsers, failUsers, reqUsers, GET_USER } from "./index";
import axios from "axios";

function* fetchUser(items) {
  try {
    yield put(reqUsers());
    const user = yield axios.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    });
    yield put(setUsers(user.data));
  } catch (e) {
    yield put(failUsers(e.message));
  }
}

function* fetchComments(items) {
  try {
    yield put(reqComm());
    const user = yield axios.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    });
    yield put(setUsers(user.data));
  } catch (e) {
    yield put(failUsers(e.message));
  }
}
export function* mySaga() {
  yield takeLatest(GET_USER, fetchUser);
}

export default mySaga;
