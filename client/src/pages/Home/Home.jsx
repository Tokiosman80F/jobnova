import SectionTitle from "../../common/SectionTitle";
import About from "../../sections/home/About";
import Banner from "../../sections/home/Banner";
import Services from "../../sections/home/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container  mx-auto ">
        <SectionTitle />
        <Services />
        <About />
      </div>
    </div>
  );
};

export default Home;
