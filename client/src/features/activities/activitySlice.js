import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

export const activityApi = api.injectEndpoints({
  endpoints: (build) => ({
    getActivities: build.query({
      query: () => 'activities',
      providesTags: ['Activities'],
    }),
  }),
})

const activitiesSlice = createSlice({
  name: "activities",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getActivities.matchFulfilled, (state, { payload }) => {
      state = payload;
    })
  }
});

export default activitiesSlice.reducer;
export const {
  useGetActivitiesQuery
} = activityApi
