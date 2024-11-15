import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
