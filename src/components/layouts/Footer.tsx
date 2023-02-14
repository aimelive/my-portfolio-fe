import logo from "../../assets/images/logo_white.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import React, { useState } from "react";
import { switchScreen } from "../../utils/screenUtils";
import { Validate } from "../../helpers/validations";

const Footer = () => {
  const [error, setError] = useState<string>();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Validate(email).email() !== true) {
      setError(new Validate(email).email().toString());
      return;
    }

    setError("This feature is not implemented yet");
  };
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 md:px-16">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copright &copy; 2023, All Rights Reserved
          </div>
          <div>
            <img src={logo} className="h-8" alt="Aimelive Logo" />
          </div>
          <div className="flex justify-center space-x-4 text-white">
            <a href="/#" className="icon">
              <FaTwitter size={22} />
            </a>
            <a
              href="https://github.com/aimelive"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaGithub size={22} />
            </a>
            <a href="/#" className="icon">
              <FaGoogle size={22} />
            </a>
            <a href="/#" className="icon">
              <FaFacebook size={22} />
            </a>
            <a href="/#" className="icon">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "WELCOME")}
              className="hover:text-slate-400"
            >
              Home
            </a>
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "CONTACT")}
              className="hover:text-slate-400"
            >
              Contact
            </a>
            <a
              onClick={(e) => switchScreen(e, "PROJECTS")}
              href="/#"
              className="hover:text-slate-400"
            >
              Projects
            </a>
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "SERVICES")}
              className="hover:text-slate-400"
            >
              Services
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "BLOGS")}
              className="hover:text-slate-400"
            >
              Blogs
            </a>
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "SERVICES")}
              className="hover:text-slate-400"
            >
              About
            </a>
            <a
              href="/#"
              onClick={(e) => switchScreen(e, "TESTIMONIALS")}
              className="hover:text-slate-400"
            >
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form onSubmit={handleSubmit}>
            <p className="text-sm text-white">{error}</p>
            <div className="flex flex-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button className="px-6 py-2 text-white bg-slate-400 hover:bg-slate-300 focus:outline-none rounded-full">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
