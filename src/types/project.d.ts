import { ProjectPlatform } from "../data/projects";

type Platform = {
  type: ProjectPlatform;
  url: string;
};

type Project = {
  id: string;
  title: string;
  tools: string[];
  stars: number;
  rate: number;
  platforms: Platform[];
  imgUrl: string;
};

export default Project;
