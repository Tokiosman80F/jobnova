import About from "../../sections/home/About";
import Banner from "../../sections/home/Banner";
import FindCompany from "../../sections/home/FindCompany";
import PopularJob from "../../sections/home/PopularJob";
import Services from "../../sections/home/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container  mx-auto ">
        <Services />
        <About />
        <PopularJob />
        <FindCompany />
      </div>
    </div>
  );
};

export default Home;
