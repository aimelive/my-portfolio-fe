import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import FetchError from "../../types/error";
import Testimony from "../../types/testimony";
import { fetchAllTestimonials } from "../thunks/testimonyThunks";

export interface TestimonialsState {
  testimonials: Testimony[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: FetchError | null;
}

const initialState: TestimonialsState = {
  testimonials: [],
  loading: "idle",
  error: null,
} as TestimonialsState;

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllTestimonials.fulfilled, (state, action) => {
      const { testimonials, error, loading } = action.payload;

      if (loading === "succeeded" && testimonials.length !== 0) {
        state.testimonials = testimonials;
      }
      state.loading = loading;
      state.error = error;
    });
  },
});

export const { setIsLoading } = testimonialsSlice.actions;

export const selectTestimonials = (state: RootState) => state;

export default testimonialsSlice.reducer;
