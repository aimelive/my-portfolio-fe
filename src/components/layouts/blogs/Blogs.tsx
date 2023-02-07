import { Link } from "react-router-dom";
import { blogs } from "../../../dummy_data/blogs";
import SingleBlogCard from "./SingleBlogCard";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="max-6-xl lg:px-32 mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-center">Recent Articles</h2>
        <div className="flex flex-col md:flex-row my-12 justify-between">
          {blogs.map((blog) => (
            <SingleBlogCard {...blog} key={blog.id} />
          ))}
        </div>

        <Link
          to="/#"
          className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
