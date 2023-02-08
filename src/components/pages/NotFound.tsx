import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogVariants } from "../../utils/variants";

const NotFound = () => {
  return (
    <motion.div
      variants={blogVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="bg-white p-8 m-10 mx-auto w-5/6 shadow-xl rounded-md text-center md:w-1/2"
    >
      <Link to="/">
        <FaArrowLeft className="text-gray-400 hover:text-primary hover:scale-110 duration-300" />
      </Link>

      <p className="mt-6">Oops, The page you're looking for is unavailable</p>
      <div className="mt-8 mb-2">
        <Link
          to="/"
          className="bg-primary text-white rounded-full px-8 py-2 text-sm shadow-md font-bold duration-300 hover:bg-white hover:text-primary hover:border-primary hover:border-2"
        >
          Go To Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
