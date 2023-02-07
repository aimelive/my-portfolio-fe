import Testimony from "../../../types/testimony";

const UserTestimony = (testimony: Testimony) => {
  const style = `flex flex-col items-center p-6 space-x-6 space-y-3 rounded-lg bg-gray-200 md:w-1/3`;
  const style2 = `hidden md:flex flex-col items-center p-6 space-x-6 space-y-3 rounded-lg bg-gray-200 md:w-1/3`;
  return (
    <div className={testimony.hidden ? style2 : style}>
      <img
        src={testimony.imgUrl}
        alt="testimonial"
        className="w-16 h-16 -mt-14 rounded-full"
      />
      <h5 className="text-lg font-bold">{testimony.name}</h5>
      <p className="text-sm text-slate-400">"{testimony.description}"</p>
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
