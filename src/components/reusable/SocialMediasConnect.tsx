import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const SocialMediasConnect = () => {
  return (
    <>
      <p className="italic text-sm text-gray-500 my-4">Let's connect!</p>
      <div className="flex justify-center space-x-4 text-primary">
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaTwitter size={22} />
        </a>
        <a
          href="https://github.com/aimelive"
          target="_blank"
          rel="noreferrer"
          className="icon hover:text-lightPrimary"
        >
          <FaGithub size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaGoogle size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaFacebook size={22} />
        </a>
        <a href="/#" className="icon hover:text-lightPrimary">
          <FaInstagram size={22} />
        </a>
      </div>
    </>
  );
};

export default SocialMediasConnect;
