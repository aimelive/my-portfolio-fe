import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Blog from "../../../types/blog";
import { Link, useNavigate } from "react-router-dom";
import { blogVariants } from "../../../utils/variants";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchAllBlogs } from "../../../redux/thunks/blogThunks";
import moment from "moment";
import SocialMediasConnect from "../../reusable/SocialMediasConnect";

const AllBlogsPage = () => {
  const navigate = useNavigate();

  const { blogs, error, loading } = useAppSelector((state) => state.blogs);

  let blogsA: Blog[] = blogs.map((blog) => blog);
  blogsA.sort((a, b) => {
    if (Number(a.createdAt) > Number(b.createdAt)) return -1;
    if (Number(a.createdAt) < Number(b.createdAt)) return 1;
    return 0;
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <motion.div
      variants={blogVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="bg-white p-8 m-10 mx-auto w-5/6 shadow-xl rounded-md text-center"
    >
      <button onClick={handleGoBack} className="block">
        <FaArrowLeft className="text-gray-400 hover:text-primary hover:scale-110 duration-300 text-lg " />
      </button>
      {loading === "idle" ? <div>Loading...</div> : null}
      {error && <span>{error.message}</span>}
      {blogs.length === 0 && loading === "idle" && error
        ? null
        : blogsA.map((blog) => {
            return (
              <div
                className="my-2 bg-slate-100 p-4 rounded-md flex flex-col md:flex-row items-center space-x-4"
                key={blog.id}
              >
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="text-center w-full h-48 md:w-1/3 object-cover"
                />
                <div className="md:pl-4 flex flex-col justify-evenly">
                  <h1 className="text-2xl">{blog.title}</h1>
                  <p>{blog.intro}</p>
                  <p className="text-xs italic text-gray-500">
                    {moment(Number(blog.createdAt)).fromNow()}
                  </p>
                </div>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="bg-primary rounded-full shadow-md text-xs text-white px-4 py-2 hover:shadow-inner hover:opacity-60"
                >
                  View more
                </Link>
              </div>
            );
          })}

      <SocialMediasConnect />
    </motion.div>
  );
};

export default AllBlogsPage;
