import {
  createAsyncThunk,
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";
import { magicLogin } from "../common/client/BackOfficeApplicationClient";

export interface AuthenticationSliceState {
  isAuthenticated: boolean;
}

export const magicLoginAttempt: any = createAsyncThunk(
  "auth/magicLoginAttempt",
  async () => {
    return await magicLogin();
  }
);

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
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: {
    [magicLoginAttempt.fulfilled]: (state: Draft<AuthenticationSliceState>) => {
      state.isAuthenticated = true;
    },
    [magicLoginAttempt.rejected]: (state: Draft<AuthenticationSliceState>) => {
      state.isAuthenticated = false;
    },
  },
});

export const isUserAuthenticated = createSelector(
  (state: any) => state.quiz.isAuthenticated,
  (data) => data
);

export const { setIsUserAuthenticated } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
