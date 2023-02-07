import Blog from "../../../types/blog";

const SingleBlog = (blog: Blog) => {
  return (
    <div className="bg-gray-200 m-2 rounded-lg overflow-hidden shadow-md shadow-gray-100 hover:shadow-xl">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full object-cover h-48"
      />
      <div className="px-4 py-2 pb-4 text-left">
        <h5 className="text-lg font-bold text-left text-primary hover:text-lightPrimary cursor-pointer">
          {blog.title}
        </h5>
        <p className="text-xs flex text-slate-400 italic">2 min ago</p>
        {blog.tags.map((tag) => (
          <span
            className="mt-2 text-xs bg-slate-100 px-3 inline-block mx-1 py-1 text-slate-400 rounded-full hover:bg-slate-300 hover:text-white cursor-pointer"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
