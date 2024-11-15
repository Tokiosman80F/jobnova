import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
