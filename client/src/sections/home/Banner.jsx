import { FaSearch } from "react-icons/fa";
import banner from "../../assets/images/home/banner.jpg";
const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 h-screen"
      style={{
        backgroundImage: `linear-gradient(0deg, #3b82f6 0%, #161c2d80), url(${banner})`,
      }}
    >
      <div className="text-center text-white max-w-3xl mx-auto space-y-6 animate-fade-up">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold animate-slide-up">
          Find & Hire Experts for any Job
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-lg animate-slide-up">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>

        {/* Search Form */}
        <div className="flex items-center justify-center gap-2 animate-slide-up">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full rounded-l-full bg-white text-gray-700 px-4 py-2 outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600">
              <FaSearch />
            </button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-full text-white font-semibold">
            Search
          </button>
        </div>

        {/* Popular Searches */}
        <p className="text-gray-300 text-sm md:text-base animate-slide-up">
          Popular Searches:{" "}
          <span className="text-gray-400">
            Designer, Developer, Web, IOS, PHP, Senior Engineer
          </span>
        </p>
      </div>

      {/* Curved Bottom SVG with Enhanced Animation */}
      <svg
        className="absolute bottom-0 w-full animate-wave"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,144C672,149,768,107,864,96C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
