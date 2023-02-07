import { FaGithub, FaGooglePlay, FaIntercom, FaVideo } from "react-icons/fa";
import Project from "../types/project";

export enum ProjectPlatform {
  github,
  playstore,
  website,
  demo,
}

export const platformsMap = new Map<ProjectPlatform, String>();

platformsMap.set(ProjectPlatform.github, "GitHub");
platformsMap.set(ProjectPlatform.playstore, "PlayStore");
platformsMap.set(ProjectPlatform.website, "Website");
platformsMap.set(ProjectPlatform.demo, "Demo");

export const platformsIcon = new Map<ProjectPlatform, JSX.Element>();
const props = { className: "mx-4" };
platformsIcon.set(ProjectPlatform.github, FaGithub(props));
platformsIcon.set(ProjectPlatform.playstore, FaGooglePlay(props));
platformsIcon.set(ProjectPlatform.website, FaIntercom(props));
platformsIcon.set(ProjectPlatform.demo, FaVideo(props));

export const projects: Project[] = [
  {
    id: "project_id",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.playstore,
      },
    ],
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/02/04/13/06/station-7767132_1280.jpg",
    rate: 3,
  },
  {
    id: "project_id1",
    title: "Food Delivery App",
    tools: [
      "Firebase",
      "Flutter",
      "Firebase",
      "Flutter",
      "Firebase",
      "GitHub",
      "GitHub",
      "GitHub",
      "GitHub",
    ],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
      {
        url: "Demo",
        type: ProjectPlatform.demo,
      },
    ],
    imgUrl:
      "https://cdn.pixabay.com/photo/2022/06/08/05/43/motorbike-7249769_1280.jpg",
    rate: 3,
  },
  {
    id: "project_id2",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 3,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/01/15/07/59/winter-7719701_1280.jpg",
  },
  {
    id: "project_id29",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 2,
    imgUrl:
      "https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_1280.jpg",
  },
  {
    id: "project_id3",
    title: "Food Delivery App - Flutter Ordering Application",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 5,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/02/04/13/06/station-7767132_1280.jpg",
  },
  {
    id: "project_id4",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 1,
    imgUrl:
      "https://cdn.pixabay.com/photo/2014/07/21/03/53/digital-art-398342_1280.png",
  },
  {
    id: "project_id5",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 0,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/01/15/07/59/winter-7719701_1280.jpg",
  },
  {
    id: "project_id6",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 4,
    imgUrl:
      "https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_1280.jpg",
  },
  {
    id: "project_id7",
    title: "Food Delivery App",
    tools: ["Firebase", "Flutter"],
    stars: 23,
    platforms: [
      {
        url: "github",
        type: ProjectPlatform.github,
      },
      {
        url: "website",
        type: ProjectPlatform.website,
      },
      {
        url: "playstore",
        type: ProjectPlatform.playstore,
      },
    ],
    rate: 3,
    imgUrl:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png",
  },
];
