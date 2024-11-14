import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import service1 from "../../assets/images/home/Service_1.jpg";
import service2 from "../../assets/images/home/Service_2.jpg";
import service3 from "../../assets/images/home/Service_3.jpg";
import service4 from "../../assets/images/home/Service_4.jpg";
import service5 from "../../assets/images/home/Service_5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../common/SectionTitle";

const servicesCollection = [
  { id: 1, image: service1, text: "Product Branding & Design" },
  { id: 2, image: service2, text: "Wordpress Development" },
  { id: 3, image: service3, text: "Audio & Vedio Editing" },
  { id: 4, image: service4, text: "UI UX Designer" },
  { id: 5, image: service5, text: "Digital Marketing" },
];

const Services = () => {
  return (
    <div>
      <SectionTitle
        title="Trending Services"
        subtitle="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
      />

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {servicesCollection.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative h-[300px] group">
              <img
                src={service.image}
                alt={service.text}
                className="w-full h-full rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 transition-all duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:from-blue-500 group-hover:to-transparent">
                <h3 className="text-white text-lg transition-colors duration-300 ease-in-out ">
                  {service.text}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
