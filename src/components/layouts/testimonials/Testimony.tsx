import moment from "moment";
import Testimony from "../../../types/testimony";

const UserTestimony = (testimony: Testimony) => {
  return (
    <div className="flex flex-col items-center p-6 space-x-6 space-y-3 rounded-lg bg-gray-200 my-5 md:my-0 md:w-1/3">
      <img
        src={testimony.imgUrl}
        alt="testimonial"
        className="w-16 h-16 -mt-14 rounded-full"
      />
      <h5 className="text-lg font-bold">{testimony.username}</h5>
      <p className="text-sm text-slate-400">"{testimony.message}"</p>
      <p className="text-xs italic text-slate-500 opacity-25">
        {moment(Number(testimony.createdAt)).fromNow()}
      </p>
      <a
        href={testimony.link}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
      >
        View more
      </a>
    </div>
  );
};

export default UserTestimony;
