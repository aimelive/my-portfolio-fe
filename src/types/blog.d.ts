type Blog = {
  id: string;
  img: string;
  title: string;
  intro: string;
  body: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date | null;
};

export default Blog;
