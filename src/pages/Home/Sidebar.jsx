import { useState } from "react";
import { GrLogout } from "react-icons/gr";



import { Link,  } from "react-router-dom";
import logo from "../../assets/logoss.svg";
import useAuth from "../../hooks/useAuth";

import AdminSidebar from "./Admin/AdminSidebar";
import EmployeeSidebar from "./Employee/EmployeeSidebar";
import useRole from "../../hooks/useRole";
import v1 from "../../assets/Vector.png";
import v2 from "../../assets/vector2.svg";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();
  const [isActive, setActive] = useState(false);


  return (
    // <div className="">
    //   {/* Small Screen Navbar */}
    //   <div className="bg-[#f9f9f9]  text-gray-800 flex justify-between ">
    //     <button
    //       onClick={handleToggle}
    //       className=" z-50 absolute inline-block  lg:hidden top-3 left-4 p-4 focus:outline-none   hover:bg-gray-300 hover:scale-105 transition-all duration-500 focus:bg-[#f9f9f9]"
    //     >
    //       {!isActive ? (
    //         <RxCross1 className="h-6 w-6" />
    //       ) : (
    //         <AiOutlineBars className="h-6 w-6" />
    //       )}
    //     </button>
    //   </div>

    //   {/* Sidebar */}
    //   <div
    //     className={`z-10  md:fixed shadow-2xl bg-black  lg:shadow-none   flex flex-col justify-between overflow-x-hidden  w-[260px]   pl-2 pr-2  py-4 absolute inset-y-0 left-0 transform ${
    //       isActive && "-translate-x-full"
    //     }  lg:translate-x-0  transition duration-200 ease-in-out`}
    //   >
    //     <div className=" relative z-20">
    //       <div className=" flex justify-center hover:scale-105 transition-all duration-500">
    //         <Link
    //           to={"/"}
    //           className="font-medium hidden lg:flex   z-40      rounded-xl"
    //         >
    //           <img className="w-[220px]" src={logo} />
    //         </Link>
    //       </div>

    //       {/* Nav Items */}
    //       <div className="flex  flex-col  justify-between  flex-1 mt-[42px] lg:mt-6">

    //         <nav>
    //           {/* Statistics */}
    //           {isLoading && <p className="text-lg text-white text-center">Loading...</p>}
    //           {role === "admin" && !isLoading && <AdminSidebar />}
    //           {role === "employee" && !isLoading && <EmployeeSidebar />}
    //         </nav>
    //       </div>
    //     </div>

    //     <div className=" relative z-10 px-4">
    //       <button
    //         onClick={logOut}
    //         className="flex w-full items-center gap-2 text-white rounded-md  p-2  bg-red-600   hover:bg-red-800  transition-colors duration-500 transform"
    //       >
    //         <GrLogout className="w-6 h-6" />

    //         <span className="mr-4 font-medium">Logout</span>
    //       </button>
    //     </div>
    //     <img src={v1} className="absolute bottom-0 right-0"/>
    //     <img src={v2} className="absolute top-0 left-0"/>
    //     <div
    //       className={`fixed border-4 top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
    //         isActive ? "block" : "hidden"
    //       }`}
    //       onClick={() => isActive(false)}
    //     ></div>
    //   </div>
    // </div>

    <div className="relative  bg-black">
      <button
        title="Side navigation"
        type="button"
        className={`visible absolute -top-16 left-6 z-40 order-10 block h-10 w-10 self-center rounded bg-transparent hover:bg-white opacity-100 lg:hidden ${
          isActive
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isActive ? " true" : "false"}
        aria-controls="nav-menu-2"
        onClick={() => setActive(!isActive)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      <aside
        id="nav-menu-2"
        aria-label="Side navigation"
        className={`fixed   bg-black top-0 bottom-0 left-0 z-40 flex w-[265px] flex-col  shadow-2xl transition-transform lg:translate-x-0 ${
          isActive ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className=" mt-5  relative z-30 flex justify-center hover:scale-105 transition-all duration-500">
          <Link to={"/"} className="font-medium   z-40    rounded-xl">
            <img className="w-[220px]" src={logo} />
          </Link>
        </div>
        <div className="flex relative z-40  flex-col  justify-between  flex-1 mt-[42px] lg:mt-6">
          <nav>
            {/* Statistics */}
            {isLoading && (
              <p className="text-lg text-white text-center">Loading...</p>
            )}
            {role === "employee" && !isLoading && <AdminSidebar />}
            {role === "admin" && !isLoading && <EmployeeSidebar />}
          </nav>
        </div>

        <div className=" relative z-10 mb-5 px-4">
          <button
            onClick={logOut}
            className="flex w-full items-center gap-2 text-white rounded-md  p-2  bg-red-600   hover:bg-red-800  transition-colors duration-500 transform"
          >
            <GrLogout className="w-6 h-6" />

            <span className="mr-4 font-medium">Logout</span>
          </button>
        </div>
        <img src={v1} className="absolute bottom-0 right-0" />
        <img src={v2} className="absolute top-0 left-0" />
      </aside>

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isActive ? "block" : "hidden"
        }`}
        onClick={() => setActive(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
