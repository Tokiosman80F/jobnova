import { Link } from "react-router-dom";
import error from "../assets/images/error/error_image.png";
import logo from "../assets/images/error/logo__error.png";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen">
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Error Message Section */}
      <div className="flex flex-col items-center gap-4">
        <img src={error} alt="Error" />
        <h1 className="uppercase font-bold text-3xl">Page Not Found</h1>
        <p className="text-gray-500">Whoops, this is embarrassing.</p>
        <p className="text-gray-500">
          Looks like the page you were looking for wasn't found.
        </p>
        {/* Back to Home Link */}
        <p>
          <Link to="/" className="uppercase text-blue-600 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>

      {/* Copyright Text */}
      <p className="mb-4 md:mb-0 text-gray-500">
        © {new Date().getFullYear()} Developed by Developer
      </p>
    </div>
  );
};

export default Error;
