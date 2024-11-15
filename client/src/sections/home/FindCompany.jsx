import { motion } from "framer-motion";
import React from "react";
import company1 from "../../assets/images/home/Company_1.jpg";
import company2 from "../../assets/images/home/Company_2.jpg";
import android_logo from "../../assets/images/home/logo_android.png";
import fb_logo from "../../assets/images/home/logo_fb.png";
import google_logo from "../../assets/images/home/logo_google.png";
import lenovo_logo from "../../assets/images/home/logo_lenovo.png";
import linkedin_logo from "../../assets/images/home/logo_linkdin.png";
import spotify_logo from "../../assets/images/home/logo_spotify.png";
import SectionTitle from "../../common/SectionTitle";
const FindCompany = () => {
  return (
    <section className="my-16 py-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 space-y-8 md:space-y-0">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          {/* Large Image with Hover Animation */}
          <motion.img
            src={company1}
            alt="Large"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-3/4 h-1/2 rounded-lg shadow-md object-cover transition-transform duration-300"
          />

          {/* Small Image - only visible on medium screens and above */}
          <motion.div
            className="hidden md:block w-32 h-32 md:w-48 md:h-48 mt-[-40px] md:mt-[-60px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={company2}
              alt="Small"
              className="absolute bottom-0 right-0 w-1/2 border-[10px] border-white rounded-lg shadow-md object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side with Text Animations */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <SectionTitle
            title="Find Best Companies."
            subtitle="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
            textAlign="left"
          />
          {/* Company List */}
          <div className="p-4">
            {/* Company Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
              {/* Facebook Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={fb_logo}
                  alt="Facebook"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">Facebook</span>
                  <span className="text-gray-600">10 Vacancies</span>
                </div>
              </div>

              {/* Google Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={google_logo}
                  alt="Google"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">Google</span>
                  <span className="text-gray-600">10 Vacancies</span>
                </div>
              </div>

              {/* Android Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={android_logo}
                  alt="Android"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">Android</span>
                  <span className="text-gray-600">5 Vacancies</span>
                </div>
              </div>

              {/* Lenovo Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={lenovo_logo}
                  alt="Lenovo"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">Lenovo</span>
                  <span className="text-gray-600">8 Vacancies</span>
                </div>
              </div>

              {/* Spotify Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={spotify_logo}
                  alt="Spotify"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">Spotify</span>
                  <span className="text-gray-600">7 Vacancies</span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="flex items-center gap-3 border-2 p-3 rounded-lg bg-white shadow-md w-full sm:w-auto">
                <img
                  src={linkedin_logo}
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800">LinkedIn</span>
                  <span className="text-gray-600">6 Vacancies</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindCompany;
