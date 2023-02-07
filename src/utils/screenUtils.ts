import Blogs from "../components/layouts/blogs/Blogs";
import Contacts from "../components/layouts/Contacts";
import Footer from "../components/layouts/Footer";
import Projects from "../components/layouts/projects/Projects";
import Services from "../components/layouts/services/Services";
import Testimonials from "../components/layouts/testimonials/Testimonials";
import Welcome from "../components/layouts/Welcome";

export const TOTAL_SCREENS: {
  name: string;
  component: () => JSX.Element;
  alreadyRendered?: boolean;
}[] = [
  {
    name: "WELCOME",
    component: Welcome,
  },
  {
    name: "SERVICES",
    component: Services,
  },
  {
    name: "BLOGS",
    component: Blogs,
  },
  {
    name: "PROJECTS",
    component: Projects,
  },
  {
    name: "TESTIMONIALS",
    component: Testimonials,
  },
  {
    name: "CONTACT",
    component: Contacts,
  },
  {
    name: "FOOTER",
    component: Footer,
  },
];

