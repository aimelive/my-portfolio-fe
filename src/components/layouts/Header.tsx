import logo from "../../assets/images/logo.png";
import { switchScreen } from "../../utils/screenUtils";

const Header = () => {
  const menuItems: { id: string; spanText: string }[] = [
    {
      id: "WELCOME",
      spanText: "Home",
    },
    {
      id: "SERVICES",
      spanText: "Services",
    },
    {
      id: "PROJECTS",
      spanText: "Projects",
    },
    {
      id: "BLOGS",
      spanText: "Blogs",
    },
    {
      id: "TESTIMONIALS",
      spanText: "Testimonials",
    },
  ];
  const handleClickMenu = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn?.classList.toggle("open");
    nav?.classList.toggle("flex");
    nav?.classList.toggle("hidden");
  };

  return (
    <header>
      <div className="flex justify-between p-6 items-center md:px-16">
        <div className="cursor-pointer">
          <img src={logo} alt="Aimelive Logo" className="w-60" />
        </div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => {
              return (
                <li key={item.spanText}>
                  <span
                    className="menu-a"
                    onClick={(e) => switchScreen(e, item.id)}
                  >
                    {item.spanText}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:block">
          <a
            href="/#"
            onClick={(e) => switchScreen(e, "CONTACT")}
            className="text-sm capitalize text-white bg-primary px-6 py-2 shadow rounded-full self-baseline hover:bg-blue-400"
          >
            Hire Me
          </a>
        </div>
        <button
          onClick={handleClickMenu}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center self-end z-50 hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            {menuItems.map((item) => (
              <a
                href="/#"
                key={item.spanText}
                onClick={(e) => switchScreen(e, item.id)}
              >
                {item.spanText}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
