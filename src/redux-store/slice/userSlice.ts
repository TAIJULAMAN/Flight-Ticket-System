import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./useLogin";

const initialState: any = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk<any, any>("auth/loginUser", async (credentials, { rejectWithValue }: any) => {
  try {
    const response = await loginApi(credentials);
    return response;
  } catch (error: any) {
    return rejectWithValue(error?.message || "Login failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
      deleteCookie("token");
      deleteCookie("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload?.token;
        state.user = action.payload?.user;

        if (state.token) {
          setCookie("token", state.token);
        }
        if (state.user) {
          setCookie("user", JSON.stringify(state.user));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

const setCookie = (name: string, value: string, days: number = 1) => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
