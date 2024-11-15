import { CiBookmark } from "react-icons/ci";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between border bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 space-y-4 md:space-y-0 md:space-x-4">
      {/* Company Logo */}
      <div className="w-16 h-16 flex-shrink-0">
        <img
          src={job.logo}
          alt={job.company}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Job Details */}
      <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Job Info */}
        <div className="flex flex-col space-y-1 w-full">
          {/* Job Title */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {job.title}
          </h2>

          {/* Job Type and Date */}
          <div className="flex flex-wrap items-center space-x-2 text-gray-600">
            <span className="font-medium">{job.type}</span>
            <span className="text-sm flex items-center">
              <FaClock className="mr-1" />
              {job.date}
            </span>
          </div>
        </div>

        {/* Location and Salary */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0 w-full">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="text-blue-600 font-semibold">{job.salary}</div>
        </div>
      </div>

      {/* Bookmark and Apply Button */}
      <div className="flex items-center justify-between w-full md:w-auto space-x-4">
        <CiBookmark
          size={30}
          className="text-gray-600 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full p-1 transition duration-300"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded uppercase font-semibold hover:bg-blue-700 transition duration-300 w-full md:w-auto">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
