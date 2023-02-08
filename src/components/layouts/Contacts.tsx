import React from "react";
import photo from "../../assets/images/aime.png";

const Contacts = () => {
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold">
        Have an idea? Tell me about!
      </h1>
      <section
        aria-labelledby="contact"
        className="container mx-auto px-8 overflow-hidden"
      >
        <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
          <div className="md:flex-1 md:max-w-sm relative">
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg"
              }
              alt="Lamp"
              className="mx-auto"
            />
            <a
              href="https://drive.google.com/u/0/uc?id=1txa8il3V7DFI-TzN7KGUvfhm-EFOo_7w&export=download"
              className="
              py-2
              px-6
              bg-primary
              w-max
              mx-auto
              mt-12
              md:mb-12
              flex
              gap-2
              shadow-xl
              hover:shadow-none
              transition-shadow
              focus:outline-none
              focus-visible:ring-4
              ring-primary
              rounded-md
              ring-offset-4
              ring-offset-white
             text-white
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download my CV</span>
            </a>
            <img
              src={photo}
              alt="app"
              width="240"
              className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
            />
            <div
              className="
              absolute
              -bottom-18
              left-1/2
              -translate-x-1/2
              -z-10
              aspect-square
              md:border-8
              border-lightPrimary
              rounded-full
              md:w-72
              lg:w-96
            "
            ></div>
          </div>
          <form
            className="
            relative
            border-8
            border-primary
            p-6
            rounded-lg
            grid
            gap-8
            md:flex-1
            md:max-w-lg
            my-4
            md:my-12
            lg:my-16
            bg-white
            w-full"
            onSubmit={handleSend}
          >
            <h2 id="contact" className="text-3xl font-bold">
              Let’s Connect
            </h2>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="
            peer
            form-input
            w-full
            border-2
            border-neutral-700
            rounded-md
             outline-none
             px-2 py-1
            placeholder-transparent
        "
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="
          text-neutral-700
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-primary
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
        "
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="
            peer
            form-input
            w-full
            border-2
            border-neutral-700
            rounded-md
            outline-none
            px-2 py-1
            placeholder-transparent
          "
                placeholder="Your Email"
              />
              <label
                htmlFor="email"
                className="
          text-neutral-700
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-primary
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          
        "
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="content"
                id="content"
                cols={20}
                rows={5}
                className="
          peer
          form-textarea
          resize-none
          w-full
          border-2
          border-neutral-700
          rounded-md
          px-2 py-1 outline-none
         
          placeholder-transparent
        "
                placeholder="How can we help?"
              ></textarea>
              <label
                htmlFor="content"
                className="
            text-neutral-700
            text-sm
            font-bold
            uppercase
            absolute
            -top-3
            left-2
            -translate-y-1/2
            transition-all
            peer-placeholder-shown:left-4
            peer-placeholder-shown:top-6
            peer-placeholder-shown:text-primary
            peer-focus:-top-4
            peer-focus:left-2
            peer-focus:text-neutral-600
          
          "
              >
                How can we help?
              </label>
            </div>
            <button
              className="
          py-2
          px-6
          bg-primary
          text-white
          w-max
          shadow-xl
          hover:shadow-none
          transition-shadow
          focus:outline-none
          focus-visible:ring-4
          ring-primary
          rounded-md
          ring-offset-4
          ring-offset-white
         
        "
              type="submit"
            >
              Contact Me
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
