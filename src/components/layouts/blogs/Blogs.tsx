import { blogs } from "../../../dummy_data/blogs";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="max-6-xl lg:px-32 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">Recent Articles</h2>
        <div className="flex flex-col md:flex-row my-12 justify-between">
          {blogs.map((blog) => (
            <SingleBlog {...blog} key={blog.id} />
          ))}
        </div>

        <a
          href="/#"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default Blogs;
