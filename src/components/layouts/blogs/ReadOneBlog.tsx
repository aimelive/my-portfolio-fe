import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getOneBlog } from "../../../data/blogs";
import Blog from "../../../types/blog";
import { useNavigate } from "react-router-dom";
import { blogVariants } from "../../../utils/variants";

const BlogPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const blog: Blog | null = getOneBlog(useParams().slug);
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
      <h1 className="my-2 text-2xl font-bold">{blog?.title}</h1>
      <img
        src={blog?.img}
        alt={blog?.title}
        className="h-96 object-contain mx-auto"
      />
      <p className="italic text-sm text-gray-500 my-4">
        "{blog?.intro}" ~{" "}
        {<span className="text-slate-700">published 2 days ago</span>}
      </p>
      <p className="py-4 md:text-justify md:px-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam
        in culpa voluptatibus doloribus, aliquid perspiciatis magnam. Magni
        maxime nisi harum voluptas est vitae, reprehenderit impedit libero
        eligendi iusto quaerat.
      </p>

      <p className="italic text-sm text-gray-500 my-4">Let's connect!</p>
      <div className="flex justify-center space-x-4 text-primary">
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaTwitter size={22} />
        </a>
        <a
          href="https://github.com/aimelive"
          target="_blank"
          rel="noreferrer"
          className="icon hover:text-lightPrimary"
        >
          <FaGithub size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaGoogle size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaFacebook size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaInstagram size={22} />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogPage;
