import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllBlogs } from "../../../redux/thunks/blogThunks";

import Blog from "../../../types/blog";
import SingleBlogCard from "./SingleBlogCard";
import { setIsLoading } from "../../../redux/reducers/blogsReducer";
import CardError from "../../reusable/CardError";
import GridsShimmer from "../../reusable/GridsShimmer";

const Blogs = () => {
  const { blogs, error, loading } = useAppSelector((state) => state.blogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);
  let blogsA: Blog[] = blogs.map((blog) => blog);
  blogsA.sort((a, b) => {
    if (Number(a.createdAt) > Number(b.createdAt)) return -1;
    if (Number(a.createdAt) < Number(b.createdAt)) return 1;
    return 0;
  });

  return (
    <section id="blogs">
      <div className="max-6-xl lg:px-32 mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-center">Recent Articles</h2>
        {loading === "succeeded" || loading === "failed" ? null : (
          <GridsShimmer />
        )}

        {error && loading === "failed" && blogs.length == 0 ? (
          <CardError
            message={error.message}
            status={error.status}
            item="blogs"
            onClick={() => {
              dispatch(setIsLoading());
              dispatch(fetchAllBlogs());
            }}
          />
        ) : (
          <div className="flex flex-col md:flex-row my-12 justify-between">
            {blogsA.slice(0, 3).map((blog, index) => (
              <SingleBlogCard {...blog} key={blog.id} />
            ))}
          </div>
        )}

        <Link
          to="/blogs"
          className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
        >
          Read More ({blogsA.length}+)
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
