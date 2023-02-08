import Blog from "../types/blog";

export const blogs: Blog[] = [
  {
    id: "blog_id",
    title: "How to get started with Bug Tracker App",
    intro:
      "Get started on how to use and test my bug tracker app released in february",
    body: "...",
    img: "https://user-images.githubusercontent.com/98814433/212868070-f5f6494c-0a17-4a22-94de-15bf7613079f.png",
    createdAt: new Date().toString(),
    updatedAt: null,
    tags: ["React", "TypeScript", "TailwindCSS", "Redux", "Firebase"],
  },
  {
    id: "blog_id1",
    title: "WeBuy Food - Flutter Application Demo",
    intro:
      "Get started on how to use and test my bug tracker app released in february",
    body: "...",
    img: "https://cdn.pixabay.com/photo/2022/01/28/12/17/delivery-6974508_1280.jpg",
    createdAt: new Date().toString(),
    updatedAt: null,
    tags: ["Flutter", "Dart", "Stripe", "Riverpod"],
  },

  {
    id: "blog_id2",
    title: "How to get started with Bug Tracker App",
    intro:
      "Get started on how to use and test my bug tracker app released in february",
    body: "...",
    img: "https://user-images.githubusercontent.com/98814433/212868070-f5f6494c-0a17-4a22-94de-15bf7613079f.png",
    createdAt: new Date().toString(),
    updatedAt: null,
    tags: ["React", "TypeScript", "TailwindCSS", "Redux"],
  },
];

export const getOneBlog = (slug?: string): Blog | null => {
  try {
    return blogs.filter(
      (blog) => blog.title.split(" ").join("-").toLowerCase() === slug
    )[0];
  } catch (error) {
    return null;
  }
};
