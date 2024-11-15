import React from "react";
import { FaArrowRight } from "react-icons/fa";
import fb from "../../assets/images/home/logo_fb.png";
import SectionTitle from "../../common/SectionTitle";
import JobCard from "./JobCard";
const PopularJob = () => {
  const jobData = {
    logo: fb,
    company: "TechCorp",
    title: "Senior Frontend Developer",
    type: "Full Time",
    date: "2 days ago",
    location: "San Francisco, CA",
    salary: "$80,000 - $100,000/year",
  };
  return (
    <div>
      <SectionTitle
        title="Popular Job Listing"
        subtitle="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
      />
      <div className="p-8 bg-gray-00 m">
        <JobCard job={jobData} />
      </div>
      {/* See More Jobs Button */}
      <div className="flex justify-center">
        <button className="group mt-8 flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          <span>See More Jobs</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default PopularJob;
