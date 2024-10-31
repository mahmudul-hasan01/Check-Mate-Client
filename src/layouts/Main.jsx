import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Sidebar from "../pages/Home/Sidebar";
const Main = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <Navbar />
      <Sidebar />
      <div className="ml-2 md:ml-6 lg:ml-[280px] shadow-2xl rounded-lg mr-1 md:mr-6 lg:mr-8 mt-4 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
