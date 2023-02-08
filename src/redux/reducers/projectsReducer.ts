import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Project from "../../types/project";
import { projects } from "../../data/projects";

interface PorjectsState {
  projects: Project[];
}

const initialState: PorjectsState = {
  projects: projects,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

// export const { getprojects } = projectsSlice.actions;

export const selectprojects = (state: RootState) => state;

export default projectsSlice.reducer;
