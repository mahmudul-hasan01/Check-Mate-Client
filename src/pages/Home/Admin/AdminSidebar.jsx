import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdOutlineTask } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { MdFeedback } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { LuTag } from "react-icons/lu";

const AdminSidebar = () => {
  const { user } = useAuth();
  return (
    <div className="px-4 mt-24">
      <NavLink
        end
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-[#3F4454] ${
            isActive ? "bg-[#3F4454]   " : " bg-black"
          }`
        }
      >
        <MdDashboard className="w-6 h-6" />

        <span className="mx-4 font-medium">Dashboard</span>
      </NavLink>
      <NavLink
        to="/dashboard/tasks"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-[#3F4454] ${
            isActive ? "bg-[#3F4454]   " : " bg-black"
          }`
        }
      >
        <MdOutlineTask className="w-6 h-6" />

        <span className="mx-4 font-medium">Tasks</span>
      </NavLink>
      <NavLink
        to="/dashboard/users"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-[#3F4454] ${
            isActive ? "bg-[#3F4454]   " : " bg-black"
          }`
        }
      >
        <HiUsers className="w-6 h-6" />

        <span className="mx-4 font-medium">Users</span>
      </NavLink>
      <NavLink
        to="/dashboard/feedbacks"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-[#3F4454] ${
            isActive ? "bg-[#3F4454]   " : " bg-black"
          }`
        }
      >
        <MdFeedback className="w-6 h-6" />

        <span className="mx-4 font-medium">Feedbackes</span>
      </NavLink>
      <NavLink
        to="/dashboard/subscriptions"
        className={({ isActive }) =>
          `flex items-center px-4 text-white py-2 mb-3  rounded-md   transition-colors duration-300 transform  hover:text-white    hover:bg-[#3F4454] ${
            isActive ? "bg-[#3F4454]   " : " bg-black"
          }`
        }
      >
        <LuTag className="w-6 h-6" />

        <span className="mx-4 font-medium">Subscriptions</span>
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
