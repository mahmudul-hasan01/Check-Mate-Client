import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logoss.svg";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Nav = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  console.log(user);
  const handleLogout = async () => {
    await logOut();
  };
  const handleTrial = () => {
    if(!user?.email){
      navigate('/login')
    }
  }

  return (
    <div className="navbar  bg-white z-50 mx-auto left-1/2 -translate-x-1/2 absolute top-6  px-10 max-w-[1350px]  py-3 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <Link to={"/"}>
          <img src={logo} className="w-[250px]" alt="logo" />
        </Link>
      </div>
   
      <div className="navbar-end  relative  space-x-6">
        <div className="lg:block hidden">
          {user ? (
            <>
              <NavLink className={"btn btn-ghost text-black mr-3"} to={"/dashboard"}>
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="btn bg-black text-white px-6 hover:bg-slate-800"
              >
                Log Out <MdLogout size={22} />
              </button>
            </>
          ) : (
            <>
              <NavLink className={"btn text-black btn-ghost mr-2"} to={"/login"}>
                LOG IN
              </NavLink>
              <button onClick={handleTrial} className="btn uppercase bg-black text-white px-6 hover:bg-slate-800">
                Free Trial
              </button>
            </>
          )}
        </div>
        <div className="lg:hidden block">
          <HiOutlineBars3
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:scale-105 text-slate-950 transition-transform duration-500"
            size={32}
          />
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute right-[-15px] top-12 w-[200px] bg-white  p-4 rounded-lg space-y-2 lg:hidden`}
        >
          {user ? (
            <div className=" space-y-3">
              <NavLink className={"btn btn-md border border-black bg-white text-[#0F172A] w-full"} to={"/dashboard"}>
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className={"btn btn-md border border-black  bg-white   text-black w-full"}
              >
                Log Out <MdLogout size={22} />
              </button>
            </div>
          ) : (
            <>
              <NavLink className={"btn btn-ghost bg-white border border-black text-[#0F172A]  w-full mb-1 "} to={"/login"}>
                LOG IN
              </NavLink>
              <button onClick={handleTrial} className="btn uppercase  bg-slate-800 hover:bg-slate-900 w-full  text-white px-6 ">
                Free Trial
              </button>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Nav;
