import {
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface AuthenticationSliceState {
  isAuthenticated: boolean;
}

const AuthenticationSlice = createSlice({
  initialState: {
    isAuthenticated: false,
  } as AuthenticationSliceState,
  name: "QuizAuthenticationSlice",
  reducers: {
    setIsUserAuthenticated: (
      prevState: Draft<AuthenticationSliceState>,
      action: PayloadAction<boolean>
    ) => {
      console.log(prevState);
      console.log(action);
      return { ...prevState, ...{ isAuthenticated: action.payload } };
    },
  },
});

export const isUserAuthenticated = createSelector(
  (state: AuthenticationSliceState) => state.isAuthenticated,
  (data) => data
);

export const { setIsUserAuthenticated } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
