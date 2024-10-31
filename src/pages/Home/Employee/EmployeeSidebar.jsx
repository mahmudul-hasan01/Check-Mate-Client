import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";

const EmployeeSidebar = () => {
  return (
    <div className="px-4 mt-24">
      <NavLink
        end
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-green-500 ${
            isActive ? "bg-green-500   " : "bg-[#3F4454] "
          }`
        }
      >
        <MdDashboard className="w-6 h-6" />

        <span className="mx-4 font-medium">Overview</span>
      </NavLink>
      <NavLink
        to="/dashboard/task"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-green-500 ${
            isActive ? "bg-green-500   " : "bg-[#3F4454] "
          }`
        }
      >
        <MdOutlineTask className="w-6 h-6" />

        <span className="mx-4 font-medium">Tasks</span>
      </NavLink>
      <NavLink
        to="/dashboard/calender"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-green-500 ${
            isActive ? "bg-green-500   " : "bg-[#3F4454] "
          }`
        }
      >
        <FaRegCalendarAlt className="w-6 h-6" />

        <span className="mx-4 font-medium">Calender</span>
      </NavLink>
      <NavLink
        to="/dashboard/uploaded"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-green-500 ${
            isActive ? "bg-green-500   " : "bg-[#3F4454] "
          }`
        }
      >
        <MdOutlinePhotoSizeSelectActual className="w-6 h-6" />

        <span className="mx-4 font-medium">Uploaded Photo</span>
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-green-500 ${
            isActive ? "bg-green-500   " : "bg-[#3F4454] "
          }`
        }
      >
        <IoPersonSharp className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
    </div>
  );
};

export default EmployeeSidebar;
