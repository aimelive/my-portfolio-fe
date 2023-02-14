import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./reducers/blogsReducer";
import projectsReducer from "./reducers/projectsReducer";
import testimonialsReducer from "./reducers/testimonialsReducer";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    projects: projectsReducer,
    testimonials: testimonialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
