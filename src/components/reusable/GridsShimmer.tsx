import { ShimmerPostItem } from "react-shimmer-effects";

const GridsShimmer = () => {
  return (
    <div className="grid  my-12 grid-cols-1 space-x-1 md:grid-cols-3">
      <div className="px-12 md:px-4 py-2">
        <ShimmerPostItem card title text cta />
      </div>
      <div className="px-4 py-2 hidden md:block">
        <ShimmerPostItem card title text cta />
      </div>
      <div className="px-4 py-2 hidden md:block">
        <ShimmerPostItem card title text cta />
      </div>
    </div>
  );
};

export default GridsShimmer;
