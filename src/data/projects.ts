import { FaGithub, FaGooglePlay, FaIntercom, FaVideo } from "react-icons/fa";

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
const props = { className: "mx-4 sm:mr-2" };
platformsIcon.set(ProjectPlatform.github, FaGithub(props));
platformsIcon.set(ProjectPlatform.playstore, FaGooglePlay(props));
platformsIcon.set(ProjectPlatform.website, FaIntercom(props));
platformsIcon.set(ProjectPlatform.demo, FaVideo(props));
