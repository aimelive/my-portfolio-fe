import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllTestimonials } from "../../../redux/thunks/testimonyThunks";
import Testimony from "../../../types/testimony";
import UserTestimony from "./Testimony";

const Testimonials = () => {
  const { testimonials, error, loading } = useAppSelector(
    (state) => state.testimonials
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTestimonials());
  }, [dispatch]);
  let testimonies: Testimony[] = testimonials.map((testimony) => testimony);
  testimonies.sort((a, b) => {
    if (Number(a.createdAt) > Number(b.createdAt)) return -1;
    if (Number(a.createdAt) < Number(b.createdAt)) return 1;
    return 0;
  });

  return (
    <section id="testimonials">
      <div className="max-6-xl px-5 lg:px-32 mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-center">Testimonials</h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.map((testimony) => (
            <UserTestimony {...testimony} key={testimony.id} />
          ))}
        </div>
        <div className="my-16">
          <Link
            to="#"
            className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
