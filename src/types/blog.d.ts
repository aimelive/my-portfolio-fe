type Blog = {
  id: string;
  img: string;
  title: string;
  intro: string;
  body: string;
  tags: string[];
  createdAt: string;
  updatedAt: string | null;
};

export default Blog;
