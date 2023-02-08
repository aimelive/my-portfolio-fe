import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Blog from "../../types/blog";
import { blogs } from "../../data/blogs";

interface BlogsState {
  blogs: Blog[];
}

const initialState: BlogsState = {
  blogs: blogs,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    //Get all blog action but for now is not used
    getBlogs: (state, action: PayloadAction<number>) => {
      const limit = action.payload;
      state.blogs = [...state.blogs];
    },
  },
});

export const { getBlogs } = blogsSlice.actions;

export const selectBlogs = (state: RootState) => state;

export default blogsSlice.reducer;
