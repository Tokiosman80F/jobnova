import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaDollarSign,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import fb_logo from "../../assets/images/home/logo_fb.png";

const JobDetailPage = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/3 animate__animated animate__fadeIn animate__delay-0.5s">
          <div className="flex flex-col items-center space-y-6">
            <img
              src={fb_logo}
              alt="Company Logo"
              className="w-32 h-32 object-contain transition-transform transform hover:scale-105"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mt-4 hover:text-blue-500 transition-all">
              Job Title
            </h2>
            <p className="text-center text-gray-600 mt-2 transition-opacity hover:opacity-80">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30,000+
              companies worldwide.
            </p>
            <div className="flex items-center mt-4 text-sky-500 hover:text-sky-700 transition-all">
              <FaMapMarkerAlt className="mr-2" />
              <span>Location</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 animate__animated animate__fadeIn animate__delay-1s">
          <div className="space-y-6">
            {/* Job Information */}
            <div className="bg-white shadow-xl p-6 rounded-lg transition-shadow hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">Job Information</h3>
              <div className="grid grid-cols-2 space-y-3">
                <div className="flex items-center">
                  <FaUserAlt className="mr-2" />
                  <span>Employee Type: Full-Time</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Location: New York</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>Date Posted: 01/01/2024</span>
                </div>
                <div className="flex items-center">
                  <FaBriefcase className="mr-2" />
                  <span>Job Type: Permanent</span>
                </div>
                <div className="flex items-center">
                  <FaUserAlt className="mr-2" />
                  <span>Experience: 3+ Years</span>
                </div>
                <div className="flex items-center">
                  <FaGraduationCap className="mr-2" />
                  <span>Qualification: Bachelor's Degree</span>
                </div>
                <div className="flex items-center">
                  <FaDollarSign className="mr-2" />
                  <span>Salary: $70,000 - $90,000/year</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white shadow-xl p-6 rounded-lg transition-shadow hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">Job Description</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                placerat, purus ac convallis tristique, dui felis vehicula arcu,
                nec varius sem ligula non urna. Sed tristique, ante vitae dictum
                ultricies, mauris libero congue nisi, eget dignissim ligula sem
                eu tortor. Integer consectetur risus at massa feugiat viverra.
              </p>
            </div>

            {/* Required Experience, Skills, and Qualification */}
            <div className="bg-white shadow-xl p-6 rounded-lg transition-shadow hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Required Experience, Skills, and Qualifications
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>3+ years of experience in the field</li>
                <li>Strong communication and interpersonal skills</li>
                <li>Proven ability to manage projects and teams effectively</li>
                <li>Fluency in English (spoken and written)</li>
              </ul>
            </div>

            {/* Apply Button */}
            <div className="flex justify-center mt-6">
              <Link
                to="/apply"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white transform hover:scale-105"
              >
                <FaCheckCircle className="mr-2" />
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
