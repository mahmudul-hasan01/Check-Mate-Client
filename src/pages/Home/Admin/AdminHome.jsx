import { LuTag } from "react-icons/lu";
import { HiUsers } from "react-icons/hi2";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import StatsCard from "../Common/StatsCard";
import TaskTable from "./Tables/TaskTabel";
import PieChartPlaceholder from "./PieChartPlaceholder";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import img1 from "../../../assets/one.png";
import img2 from "../../../assets/two.png";
import img3 from "../../../assets/three.png";
import img4 from "../../../assets/three1.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const AdminHome = () => {
  const { user } = useAuth();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin-route/${user?.email}`
        // `${import.meta.env.VITE_API_URL}/admin-stat/${user?.email}`
      );
      console.log(data);
      return data;
    },
  });
  const totalAmount = data?.totalSubscribers?.reduce(
    (sum, item) => parseFloat(item?.subscriptionDetails?.price) + sum,
    0
  );
  if (isLoading)
    return <div className=" min-h-full flex justify-center items-center"></div>;
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          img={img2}
          icon={LuTag}
          title="Total Subscribers"
          count={data?.totalSubscribers?.length}
        />
        <StatsCard
          img={img1}
          icon={HiUsers}
          title="Total Users"
          count={data?.totalUsers?.length}
        />
        <StatsCard
          img={img4}
          icon={IoMdCheckmarkCircleOutline}
          title="Total Tasks"
          count={data?.totalTasks?.length}
        />
        <StatsCard
          img={img3}
          icon={RiExchangeDollarLine}
          title="Total Amounts"
          count={totalAmount}
        />
      </div>
      <div>
        <div className="flex justify-between lg:w-3/4 my-4 lg:pr-5">
          <h2 className="text-2xl font-medium text-slate-800">
            All Tasks Lists{" "}
          </h2>
          <Link
            to={"/dashboard/tasks"}
            className="text-slate-800 text-lg hover:bg-slate-100 px-3 py-1 rounded-md "
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col xl:flex-row  gap-5">
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-0"> */}
          <div className="flex-1">
            <TaskTable data={data?.totalTasks?.slice(0, 5)} />
          </div>
          <div className=" w-3/4 mx-auto lg:w-64 shadow-2xl rounded-xl flex flex-col h-[350px]">
            <h2 className="text-lg py-[2px] rounded-t-xl text-center mb-4 bg-green-500 text-white ">
              Tasks Activities
            </h2>
            <PieChartPlaceholder />
            <div className="flex items-center mt-4 pl-20 gap-1">
              <div className={` bg-[#153622]  w-3 h-3 rounded-full `}></div>
              
              <h2 className=" text-slate-800">Complete</h2>
            </div>
            <div className="flex items-center pl-20  gap-1">
              <div className={` bg-[#1E5034] w-3 h-3 rounded-full `}></div>
              
              <h2 className=" text-slate-800">In Progress</h2>
            </div>
            <div className="flex items-center  pl-20 gap-1">
              <div className={` bg-[#22C55E] w-3 h-3 rounded-full `}></div>
              <h2 className=" text-slate-800">Reject</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
