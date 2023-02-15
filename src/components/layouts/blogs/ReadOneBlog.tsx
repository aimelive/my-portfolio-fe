import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Blog from "../../../types/blog";
import { useNavigate } from "react-router-dom";
import { blogVariants } from "../../../utils/variants";
import { useQuery } from "@apollo/client";
import { GET_BLOG_BY_SLUG } from "../../../redux/thunks/gql/blogsQueries";
import { ShimmerPostDetails } from "react-shimmer-effects";
import CardError from "../../reusable/CardError";
import moment from "moment";
import SocialMediasConnect from "../../reusable/SocialMediasConnect";

const BlogPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug },
  });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  let blog: Blog | null;
  let body: string;

  if (data && data.getBlogBySlug) {
    blog = data.getBlogBySlug;
    body = data.getBlogBySlug.body;
  }

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

      {loading && <ShimmerPostDetails card cta variant="EDITOR" />}
      {error && (
        <CardError
          message={error.message}
          status={400}
          item="this blog"
          onClick={() => {
            console.log("We couldn't try again!");
          }}
        />
      )}

      {data && data.getBlogBySlug && (
        <>
          <h1 className="my-2 text-2xl font-bold">{blog!.title}</h1>
          <img
            src={blog!.imgUrl}
            alt={blog!.title}
            className="h-96 object-contain mx-auto"
          />
          <p className="italic text-sm text-gray-500 my-4">
            "{blog!.intro}" ~{" "}
            {
              <span className="text-slate-700">
                published {moment(Number(blog!.createdAt)).fromNow()}
              </span>
            }
          </p>
          <p className="py-4 md:text-justify md:px-12">{body!}</p>
        </>
      )}

      <SocialMediasConnect />
    </motion.div>
  );
};

export default BlogPage;
