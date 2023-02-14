import { createAsyncThunk } from "@reduxjs/toolkit";
import Project from "../../types/project";
import { client } from "../../utils/dbConfig";
import { ProjectsState } from "../reducers/projectsReducer";
import * as queries from "./gql/projectsQueries";

export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProjects",
  async (args, thunkAPI) => {
    try {
      const data = await client.query({
        query: queries.GET_ALL_PROJECTS,
      });
      if (data.data.projects) {
        const queriedProjects: Project[] = data.data.projects;
        return {
          projects: queriedProjects,
          loading: "succeeded",
          error: null,
        } as ProjectsState;
      }
      throw new Error("Something went wrong");
    } catch (error: any) {
      return {
        projects: [],
        loading: "failed",
        error: {
          status: error.networkError.statusCode,
          message: error.message,
          code: error,
        },
      } as ProjectsState;
    }
  }
);
