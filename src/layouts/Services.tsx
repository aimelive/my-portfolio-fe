import StackItem from "../components/StackItem";

const Services = () => {
  return (
    <section id="services">
      <div className="container flex flex-col px-4 justify-evenly mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12">
          <h2 className="max-w-md text-3xl font-bold text-center md:text-left">
            What do I help?
          </h2>
          <p className="max-w-sm text-center text-slate-400 md:text-left">
            Aime Ndayambaje provides all the functionality your team needs with
            the complexity. My skills is very compatible with all those ind of
            stuffs
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/3">
          <StackItem
            num={1}
            title="Frontend"
            desc="ReactJs, typescript, and many more"
          />
          <StackItem
            num={2}
            title="Backend"
            desc="node js api/ rest apis, grapgql and many more"
          />
          <StackItem
            num={3}
            title="Mobile"
            desc="very good at flutter mobile cross-platform development apps"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
