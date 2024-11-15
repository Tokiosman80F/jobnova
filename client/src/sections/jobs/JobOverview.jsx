import { FaBookmark } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import fb_icon from "../../assets/images/home/logo_fb.png";

const JobOverview = () => {
  return (
    <div className="max-w-sm bg-white border-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Part 1: Company logo and Action Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={fb_icon}
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 text-lg font-semibold">Company Name</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
            aria-label="Save Job"
          >
            <FaBookmark className="text-gray-600" />
          </button>
          <button
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
            aria-label="See Details"
          >
            <GoArrowUpRight />
          </button>
        </div>
      </div>

      {/* Part 2: Company */}
      <div className="mt-3 text-sm text-gray-600">Tech Company</div>

      {/* Part 3: Job Title */}
      <h2 className="mt-1 text-xl font-semibold text-gray-800">
        Software Engineer
      </h2>

      {/* Part 4: Job Description */}
      <p className="mt-2 text-gray-700 text-sm">
        We are looking for a passionate software engineer to join our team and
        help us build scalable web applications. If you have experience in
        full-stack development, apply now!
      </p>

      {/* Part 5: Full Time, Salary, Location with Icons */}
      <div className="mt-4 flex space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1 border bg-blue-600 text-white rounded-full py-1 px-2 ">
          <span>Full Time</span>
        </div>
        <div className="flex items-center space-x-1 border bg-blue-600 text-white rounded-full py-1 px-2 ">
          <span>$80,000/year</span>
        </div>
        <div className="flex items-center space-x-1 border bg-blue-600 text-white rounded-full py-1 px-2">
          <IoLocationSharp />
          <span>New York, NY</span>
        </div>
      </div>
    </div>
  );
};

export default JobOverview;
