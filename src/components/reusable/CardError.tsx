import { FaUndo } from "react-icons/fa";

const CardError = (error: {
  message: string;
  status: any;
  onClick: any;
  item: string;
}) => {
  return (
    <div className="my-12 bg-red-200 mx-auto rounded-lg text-xs py-6 w-5/6 shadow-lg sm:w-2/3 md:w-1/2">
      <p className="font-bold text-sm mb-2">
        Oops, we could not retrieve {error.item} at this time
      </p>
      <p>Error: {error.message}</p>
      <p>Status Code: {error.status ? error.status : "Unknown"}</p>
      <button
        className="mt-6 bg-white py-1.5 px-4 rounded-md text-sm shadow-lg duration-300 hover:bg-lightPrimary hover:text-white hover:shadow-inner"
        onClick={error.onClick}
      >
        <div className="flex justify-center items-center space-x-2">
          <FaUndo />
          <p>Try Again</p>
        </div>
      </button>
    </div>
  );
};

export default CardError;
