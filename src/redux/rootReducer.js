import { combineReducers } from "redux";
import { reducer as userReducer } from "./users/reducer";
import { reducer as commentReducer } from "./comments/reducer";

export const rootReducer = combineReducers({
  users: userReducer,
  comments: commentReducer
});
