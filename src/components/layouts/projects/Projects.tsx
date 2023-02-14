import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setIsLoadingProjects } from "../../../redux/reducers/projectsReducer";
import { fetchAllProjects } from "../../../redux/thunks/projectThunks";
import Project from "../../../types/project";
import CardError from "../../reusable/CardError";
import GridsShimmer from "../../reusable/GridsShimmer";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const { projects, error, loading } = useAppSelector(
    (state) => state.projects
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  let projectsA: Project[] = projects.map((project) => project);

  projectsA.sort((a, b) => {
    if (Number(a.createdAt) > Number(b.createdAt)) return -1;
    if (Number(a.createdAt) < Number(b.createdAt)) return 1;
    return 0;
  });

  return (
    <div className="max-6-xl lg:px-32 mx-auto text-center">
      <h2 className="text-4xl font-bold text-center my-10">Projects</h2>
      {loading === "succeeded" || loading === "failed" ? null : (
        <GridsShimmer />
      )}
      {error && loading === "failed" && projects.length == 0 ? (
        <CardError
          message={error.message}
          status={error.status}
          item="projects"
          onClick={() => {
            dispatch(setIsLoadingProjects());
            dispatch(fetchAllProjects());
          }}
        />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-4">
          {projectsA.map((project) => {
            return <ProjectGrid key={project.id} {...project} />;
          })}
        </div>
      )}

      <div className="my-16">
        <Link
          to="#"
          className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
