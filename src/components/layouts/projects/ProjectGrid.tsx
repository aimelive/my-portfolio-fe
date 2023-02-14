import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { platformsIcon, platformsMap } from "../../../data/projects";
import Project, { Platform } from "../../../types/project";

const ProjectGrid = (project: Project) => {
  const [showPlatforms, setShowPlatforms] = useState<boolean>(false);

  return (
    <div
      className="rounded-md overflow-hidden shadow-xl relative hover:shadow bg-gray-200 mx-8 sm:mx-2 md:mx-3 my-4"
      onMouseOver={() => setShowPlatforms(true)}
      onMouseOut={() => setShowPlatforms(false)}
    >
      <div className="relative">
        <span className="absolute bg-lightPrimary inline-block top-1.5 left-1.5 text-xs text-white px-2 py-0.5 rounded-full shadow-inner">
          Frontend
        </span>
        <img
          src={project.imgUrl}
          alt={project.title}
          className="h-52 w-full object-cover"
        />
        <p className="text-xs text-slate-500 px-2 overflow-ellipsis">
          {project.tools.split(", ").map((tool, index) => (
            <span key={index}>&nbsp;#{tool}</span>
          ))}
        </p>
        <h2 className="font-bold">{project.title}</h2>
        <p className="flex justify-center items-center my-2">
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <FaStar
                key={i}
                className={
                  project.rate < i ? "text-gray-400" : "text-yellow-500"
                }
              />
            );
          })}
          <span className="text-sm pl-2">{project.stars} stars</span>
        </p>
      </div>
      <AnimatePresence>
        {showPlatforms ? (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bg-gray-700 z-10 top-0 left-0 right-0 h-full bg-opacity-70"
          >
            <div className="flex flex-col p-4 justify-center h-full">
              {JSON.parse(project.platforms).map(
                (platform: Platform, index: number) => {
                  return (
                    <motion.a
                      animate={{ scale: 1, x: 0 }}
                      initial={{
                        scale: 0.8,
                        x: (index % 2 === 0 ? 10 : -10) * (index ? index : 1),
                      }}
                      exit={{ scale: 0.8 }}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      key={platform.url}
                      className="bg-white my-2 text-sm mx-16 rounded-full py-1.5 flex justify-start items-center shadow-xl shadow-slate-500 hover:shadow hover:bg-lightPrimary hover:text-white duration-300"
                    >
                      {platformsIcon.get(platform.type)}
                      <span>{platformsMap.get(platform.type)}</span>
                    </motion.a>
                  );
                }
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;
