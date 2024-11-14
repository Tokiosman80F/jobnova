import Navbar from "../components/Navbar";
import Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Home></Home>
    </div>
  );
};

export default MainLayout;
