import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/home/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#202942] text-white py-10">
      {/* Container with Padding */}
      <div className="container mx-auto px-6 lg:px-10">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-8 mb-8 space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-32" />
          </div>

          {/* Navigation Links with Padding */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              How it works
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Create a Job
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Plans
            </a>
          </div>
        </div>

        {/* Second Row with Padding */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-4">
          {/* Copyright Text */}
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Developed by Developer
          </p>

          {/* Social Media Icons with Spacing */}
          <div className="flex space-x-5">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
