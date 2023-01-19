const Header = () => {
  const handleClickMenu = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn?.classList.toggle("open");
    nav?.classList.toggle("flex");
    nav?.classList.toggle("hidden");
  };
  return (
    <header>
      <div className="flex justify-between p-6 items-center container mx-auto md:w-4/5">
        <div className="text-xl font-semibold text-primary cursor-pointer">
          <h1>AimeliveLogo</h1>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-primary">
                Services
              </a>
            </li>

            <li>
              <a href="/#" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-primary">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-primary">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <a
            href="/#"
            className="text-sm capitalize text-white bg-primary px-6 py-2 shadow rounded-full self-baseline hover:bg-blue-400"
          >
            Get Started
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
            <a href="/#">Home</a>
            <a href="/#">Projects</a>
            <a href="/#">Services</a>
            <a href="/#">Testimonials</a>
            <a href="/#">About</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
