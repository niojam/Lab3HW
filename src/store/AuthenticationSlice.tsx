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
  name: "auth",
  initialState: {
    isAuthenticated: false,
  } as AuthenticationSliceState,
  reducers: {
    setIsUserAuthenticated: (
      state: Draft<AuthenticationSliceState>,
      action: PayloadAction<boolean>
    ) => {
      return { ...state, isAuthenticated: action.payload };
    },
  },
});

export const isUserAuthenticated = createSelector(
  (state: any) => state.quiz.isAuthenticated,
  (data) => data
);

export const { setIsUserAuthenticated } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
