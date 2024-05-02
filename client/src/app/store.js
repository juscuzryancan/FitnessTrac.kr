import { configureStore } from "@reduxjs/toolkit";
import { api } from './api';
import authReducer from '../features/auth/authSlice';
import activitySlice from "../features/activities/activitySlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    activities: activitySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch);

