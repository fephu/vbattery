import type { User } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  authenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE: AuthState = {
  authenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    loginRequest: (state, _action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      localStorage.setItem("accessToken", action.payload.accessToken);
      state.isLoading = false;
      state.error = null;
      state.authenticated = true;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.authenticated = false;
      state.error = action.payload;
    },

    fetchUserRequest: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.authenticated = true;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.authenticated = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  loginFailure,
  loginRequest,
  loginSuccess,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
