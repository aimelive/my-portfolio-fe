import { ProjectPlatform } from "../data/projects";

export type Platform = {
  type: ProjectPlatform;
  url: string;
};

type Project = {
  id: string;
  title: string;
  tools: string;
  stack: string;
  stars: number;
  rate: number;
  imgUrl: string;
  platforms: string;
  createdAt: string;
  // id: string;
  // title: string;
  // tools: string[];
  // stars: number;
  // rate: number;
  // platforms: Platform[];
  // imgUrl: string;
};

export default Project;
