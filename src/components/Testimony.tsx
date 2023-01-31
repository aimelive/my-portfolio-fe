import testimony from "../assets/images/testi.png";

const Testimony = (props: any) => {
  const style = `flex flex-col items-center p-6 space-x-6 space-y-3 rounded-lg bg-gray-200 md:w-1/3`;
  const style2 = `hidden md:flex flex-col items-center p-6 space-x-6 space-y-3 rounded-lg bg-gray-200 md:w-1/3`;
  return (
    <div className={props.hidden ? style2 : style}>
      <img
        src={testimony}
        alt="testimonial"
        className="w-16 h-16 -mt-14 rounded-full"
      />
      <h5 className="text-lg font-bold">Ishimwe Gabin</h5>
      <p className="text-sm text-slate-400">
        "It was my best experience working with man, he deliver the things on
        time as expected."
      </p>
      <a
        href="/#"
        className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
      >
        View more
      </a>
    </div>
  );
};

export default Testimony;
