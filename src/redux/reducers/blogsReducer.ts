import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Blog from "../../types/blog";
import { fetchAllBlogs } from "../thunks/blogThunks";
import FetchError from "../../types/error";

export interface BlogsState {
  blogs: Blog[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: FetchError | null;
}

const initialState: BlogsState = {
  blogs: [],
  loading: "idle",
  error: null,
} as BlogsState;

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      const { blogs, error, loading } = action.payload;

      if (loading === "succeeded" && blogs.length !== 0) {
        state.blogs = blogs;
      }
      state.loading = loading;
      state.error = error;
    });
  },
});

export const { setIsLoading } = blogsSlice.actions;

export const selectBlogs = (state: RootState) => state;

export default blogsSlice.reducer;
