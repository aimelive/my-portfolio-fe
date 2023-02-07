import StackItem from "./StackItem";

const Services = () => {
  return (
    <section id="services">
      <div className="container flex flex-col px-4 justify-evenly mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12">
          <h2 className="max-w-md text-3xl font-bold text-center md:text-left">
            What do I help?
          </h2>
          <p className="max-w-sm text-center text-slate-400 md:text-left">
            Experienced Full-Stack Web & Mobile Developer with skills in
            MERN/PERN, Flutter, and TypeScript. Passionate about creating
            innovative apps and constantly seeking to expand my skill set.
            Strong foundation in frontend/backend development, scalable/secure
            apps, and good design/UX. A team player with excellent communication
            and project delivery skills. Looking for new challenges to grow and
            make a positive impact.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/3">
          <StackItem
            num={1}
            title="Frontend Developer"
            desc="I am an experienced frontend developer skilled in React, Redux, Tailwind, TypeScript and more. I have a strong understanding of these technologies and have delivered high-quality projects using them."
          />
          <StackItem
            num={2}
            title="Backend Developer"
            desc="I am an experienced Node.js backend developer with expertise in Express and database integration. I have a strong understanding of the core concepts and ability to build robust, scalable applications."
          />
          <StackItem
            num={3}
            title="Mobile Developer"
            desc="I have comprehensive knowledge in Flutter, a framework for cross-platform mobile app development. My expertise includes building apps, using widgets, streams, animations, APIs and backend services, stateful/stateless widgets, architecture patterns, Dart and Flutter CLI. I am confident in delivering top-notch results in any Flutter project."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
