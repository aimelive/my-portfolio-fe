import { createAsyncThunk } from "@reduxjs/toolkit";
import Blog from "../../types/blog";
import { client } from "../../utils/dbConfig";
import { BlogsState } from "../reducers/blogsReducer";
import * as queries from "./gql/blogsQueries";

export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllBlogs",
  async (args, thunkAPI) => {
    try {
      const data = await client.query({
        query: queries.GET_ALL_BLOGS,
      });
      if (data.data.getAllBlogs) {
        const queriedBlogs: Blog[] = data.data.getAllBlogs;
        return {
          blogs: queriedBlogs,
          loading: "succeeded",
          error: null,
        } as BlogsState;
      }
      throw new Error("Something went wrong");
    } catch (error: any) {
      return {
        blogs: [],
        loading: "failed",
        error: {
          status: error.networkError.statusCode,
          message: error.message,
          code: error,
        },
      } as BlogsState;
    }
  }
);
