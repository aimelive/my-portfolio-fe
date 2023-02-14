import { createAsyncThunk } from "@reduxjs/toolkit";
import Testimony from "../../types/testimony";
import { client } from "../../utils/dbConfig";
import { TestimonialsState } from "../reducers/testimonialsReducer";
import * as queries from "./gql/testimonialQueries";

export const fetchAllTestimonials = createAsyncThunk(
  "testimonials/fetchAllTestimonials",
  async (thunkAPI) => {
    try {
      const data = await client.query({
        query: queries.GET_ALL_TESTIMONIALS,
      });
      if (data.data.testimonials) {
        const queriedTestimonies: Testimony[] = data.data.testimonials;
        return {
          testimonials: queriedTestimonies,
          loading: "succeeded",
          error: null,
        } as TestimonialsState;
      }
      throw new Error("Something went wrong");
    } catch (error: any) {
      return {
        testimonials: [],
        loading: "failed",
        error: {
          status: error.networkError.statusCode,
          message: error.message,
          code: error,
        },
      } as TestimonialsState;
    }
  }
);
