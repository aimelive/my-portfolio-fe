import photo from "../../assets/images/aime.png";

const Welcome = () => {
  const years = new Date().getFullYear() - 2021;
  return (
    <section id="welcome">
      <div className="flex justify-evenly flex-col-reverse items-center space-x-4 md:flex-row mx-auto mt-6">
        <div className="flex flex-col space-y-10 mb-16 mt-8 font-semibold text-center px-4 md:text-left md:text-3xl">
          <h1 className="text-2xl md:text-4xl">
            Hi everyone,
            <br />
            My name is
            <span className="text-white py-1 mx-2 my-2 text-xl  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
              <span className="relative mx-2 capitalize">Aime Ndayambaje</span>
            </span>
            <br />
            I'm a Software Developer
            <br />
            with {years}+ years of working experience
          </h1>

          <p className="text-sm italic max-w-sm text-slate-400 text-center md:text-left">
            "Don't hesitate to contact me if you need a very motivated
            full-stack web or mobile developer."
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="mailto:aimendayambaje24@gmail.com"
              target="_blank"
              className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
            >
              Get Started
            </a>
            <a
              href="https://docs.google.com/document/d/1jQ9DU86IIUbpYUVAGcl4Oc3M3EsdQHCy5Mzk2jatR78/edit?usp=sharing"
              target="_blank"
              className="text-xs text-white bg-primary px-4 py-2 shadow rounded-full hover:bg-blue-400"
            >
              View CV
            </a>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt="Aimelive"
            className="h-64 -scale-x-100 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
