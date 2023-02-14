import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Project from "../../types/project";
import FetchError from "../../types/error";
import { fetchAllProjects } from "../thunks/projectThunks";

export interface ProjectsState {
  projects: Project[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: FetchError | null;
}

const initialState: ProjectsState = {
  projects: [],
  loading: "idle",
  error: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setIsLoadingProjects: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      const { projects, error, loading } = action.payload;

      if (loading === "succeeded" && projects.length !== 0) {
        state.projects = projects;
      }
      state.loading = loading;
      state.error = error;
    });
  },
});

export const { setIsLoadingProjects } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state;

export default projectsSlice.reducer;
