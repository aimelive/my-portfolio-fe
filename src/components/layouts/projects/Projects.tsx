import { Link } from "react-router-dom";
import { projects } from "../../../dummy_data/projects";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div className="max-6-xl lg:px-32 mx-auto text-center">
      <h2 className="text-4xl font-bold text-center my-10">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-4">
        {projects.map((project) => {
          return <ProjectGrid key={project.id} {...project} />;
        })}
      </div>
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
