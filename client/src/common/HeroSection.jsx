import { FaSearch } from "react-icons/fa";
import heroBg from "../assets/images/home/banner.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center">
      {/* Background Image with Curved Shape and Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          clipPath: "ellipse(100% 80% at 50% 20%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #161c2d00 0, #161c2d80 25%, #161c2dbf 50%, #161c2d)",
        }}
      ></div>

      {/* Text and Search Bar */}
      <div className="relative z-10 text-white space-y-6 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unlock Your Career Potential
        </h1>

        {/* Search Bar and Button */}
        <div className="mt-6 flex items-center justify-center w-full">
          <div className="relative w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full py-4 pl-6 pr-16 rounded-full text-gray-700 focus:outline-none shadow-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition duration-300">
              <FaSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
