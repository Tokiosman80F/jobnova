import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import aboutus1 from "../../assets/images/home/AboutUs_1.jpg";
import aboutus2 from "../../assets/images/home/AboutUs_2.jpg";
import SectionTitle from "../../common/SectionTitle";

const About = () => {
  return (
    <section className="my-16 py-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-10 space-y-8 md:space-y-0">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          {/* Large Image with Hover Animation */}
          <motion.img
            src={aboutus1}
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
              src={aboutus2}
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
            title="Millions of jobs. Find the one that's right for you."
            subtitle="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
            textAlign="left"
          />

          {/* List Items with Animation */}
          <ul className="space-y-2 flex flex-col items-start">
            {[
              "Digital Marketing Solutions for Tomorrow",
              "Our Talented & Experienced Marketing Agency",
              "Create your own skin to match your brand",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-base text-gray-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              >
                <span className="text-blue-600 mr-2 border border-blue-600 rounded-full">
                  <TiTick />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Button with Animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 flex items-center uppercase font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <span>About Us</span>
            <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
