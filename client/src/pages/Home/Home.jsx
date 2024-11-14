import SectionTitle from "../../common/SectionTitle";
import Banner from "../../sections/home/Banner";
import Services from "../../sections/home/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container  mx-auto ">
        <SectionTitle></SectionTitle>
        <Services />
      </div>
    </div>
  );
};

export default Home;
