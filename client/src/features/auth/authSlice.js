import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const TOKEN = "token"

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials
      })
    }),
    logout: builder.mutation({
      queryFn: () => ({ data: {} }),
      invalidatesTags: ["Me"]
    })
  })
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem(TOKEN, payload.token);
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: window.sessionStorage.getItem(TOKEN),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
      state.token = null;
      window.sessionStorage.removeItem(TOKEN);
    });
  }
});

export default authSlice.reducer;

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApi
