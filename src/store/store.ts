import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";

const rootReducer = combineReducers({
  quiz: AuthenticationSlice,
});

export default configureStore({
  reducer: rootReducer,
});
