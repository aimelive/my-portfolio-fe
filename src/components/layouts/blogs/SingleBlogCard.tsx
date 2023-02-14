import { motion } from "framer-motion";
import moment from "moment";
import { Link } from "react-router-dom";
import Blog from "../../../types/blog";

const SingleBlogCard = (blog: Blog) => {
  const date = moment(Number(blog.createdAt)).calendar();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="mx-12 my-4 md:m-4 bg-gray-200 rounded-lg overflow-hidden shadow-md shadow-gray-100 hover:shadow-xl"
    >
      <img
        src={blog.imgUrl}
        alt={blog.title}
        className="w-full object-cover h-48"
      />
      <div className="px-4 py-2 pb-4 text-left">
        <h5 className="text-lg font-bold text-left text-primary hover:text-lightPrimary">
          <Link to={`/blogs/${blog.title.split(" ").join("-").toLowerCase()}`}>
            {blog.title}
          </Link>
        </h5>
        <p className="text-xs flex text-slate-400 italic">{date}</p>
        {blog.tags.split(", ").map((tag) => (
          <span
            className="mt-2 text-xs bg-slate-100 px-3 inline-block mx-1 py-1 text-slate-400 rounded-full hover:bg-slate-300 hover:text-white cursor-pointer"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SingleBlogCard;
