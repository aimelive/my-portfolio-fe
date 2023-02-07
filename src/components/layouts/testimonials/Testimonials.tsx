import { Link } from "react-router-dom";
import Testimony from "../../../types/testimony";
import UserTestimony from "./Testimony";

const testimonials: Testimony[] = [
  {
    id: "usertestmony1",
    name: "Ishimwe Gabin",
    description:
      "I really love the way am working with this man, he has very good experience fo sure.",
    imgUrl: "https://gabin-portfolio.vercel.app/assets/profile2.6878c57b.png",
    hidden: false,
    link: "https://gabin-portfolio.vercel.app/",
  },
  {
    id: "usertestmony2",
    name: "Ndacyayisenga Fabrice",
    description:
      "I really love the way am working with this man, he has very good experience fo sure.",
    imgUrl: "https://ryanfab.netlify.app/images/IMG-20211216-WA0332.jpg",
    hidden: true,
    link: "https://ryanfab.netlify.app/",
  },
  {
    id: "usertestmony3",
    name: "Ngororano Armstrong",
    description:
      "I really love the way am working with this man, he has very good experience fo sure.",
    imgUrl:
      "https://media.licdn.com/dms/image/D4D03AQGHf6jkeHfJyw/profile-displayphoto-shrink_200_200/0/1670082816193?e=1680134400&v=beta&t=ny8GOaMBzS_2yxL4U3ATmIg8tqJ9R2UNK9CASf-Bp3s",
    hidden: true,
    link: "https://www.linkedin.com/in/armstrong-ngororano-03aba7244/",
  },
];

const Testimonials = () => {
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
