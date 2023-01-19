import Testimony from "../components/Testimony";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-6-xl px-5 lg:px-32 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          Testimonies from clients
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <Testimony />
          <Testimony hidden={true} />
          <Testimony hidden={true} />
        </div>
        <div className="my-16">
          <a
            href="/#"
            className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
