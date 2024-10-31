import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Link } from "react-router-dom";

import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import TrailModal from "../../Modals/TrailModal";
import axios from "axios";
import toast from "react-hot-toast";

import img1 from "../../../../assets/one.png";
import img2 from "../../../../assets/two.png";
import img3 from "../../../../assets/three.png";
import img4 from "../../../../assets/three1.png";
import StatsCard from "../../Common/StatsCard";
import PieChartPlaceholder from "../../Admin/PieChartPlaceholder";

import cal from "../../../../assets/Calendar.png";

const Overview = () => {
  const taskData = [
    { name: "Jan", tasks: 30 },
    { name: "Feb", tasks: 40 },
    { name: "Mar", tasks: 50 },
    { name: "Apr", tasks: 80 },
    { name: "May", tasks: 120 },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const {
    userDetails: { user, totalTasks },
  } = useAuth();
 

  const [progress, setProgress] = useState(
    totalTasks?.filter((item) => item?.Status === "In progress")
  );
  const [todo, setTodo] = useState(
    totalTasks?.filter((item) => item?.Status === "Pending")
  );
  const [completed, setCompleted] = useState(
    totalTasks?.filter((item) => item?.Status === "Completed")
  );
  const [data, setData] = useState([
    { name: "Complete", value: completed?.length },
    { name: "In Progress", value: progress?.length },
    { name: "Reject", value: todo?.length }
  ]
  );
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard img={img2} title="Total Task" count={totalTasks?.length} />
        <StatsCard img={img1} title="In Progress" count={progress?.length} />
        <StatsCard img={img4} title="Pending" count={todo?.length} />
        <StatsCard img={img3} title="Completed" count={completed?.length} />
      </div>
      <div className=" flex flex-col lg:flex-row  gap-4">
        {/* Task Summary */}

        <div className="flex-1">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Calendar & Total Work */}
            <div className="flex flex-1 flex-col gap-4 mb-8">
              {/* Calendar */}
              <img src={cal} alt="Calender" />

              {/* Line Chart */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4 text-slate-900">
                  Tasks
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={taskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="tasks" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-slate-900 text-2xl font-bold">Upcomming</h2>
                <Link
                  to={"/dashboard/task"}
                  className="py-1 px-3 hover:bg-green-100 rounded-xl"
                >
                  See all
                </Link>
              </div>
              <div className="flex w-full lg:w-72 flex-col space-y-4">
               
                <div className="bg-white w-full rounded-lg shadow-md p-4 flex justify-between items-start ">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className=" font-bold text-slate-900">
                        Product Planning
                      </h2>
                      <p className="text-sm font-medium text-[#18243E]">
                        4.00 PM
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-center mt-4">
                        <p className="text-sm font-medium text-gray-800">
                          Assigned by
                        </p>
                        <img
                          src="https://i.pravatar.cc/32"
                          alt="assigned-by"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                      </div>
                      <p className="text-sm text-red-600 font-semibold mt-4">
                        Due Sep 12
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white w-full rounded-lg shadow-md p-4 flex justify-between items-start ">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className=" font-bold text-slate-900">
                        Product Planning
                      </h2>
                      <p className="text-sm font-medium text-[#18243E]">
                        4.00 PM
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-center mt-4">
                        <p className="text-sm font-medium text-gray-800">
                          Assigned by
                        </p>
                        <img
                          src="https://i.pravatar.cc/32"
                          alt="assigned-by"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                      </div>
                      <p className="text-sm text-red-600 font-semibold mt-4">
                        Due Sep 12
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="w-full  lg:w-72 ">
          <div className=" w-3/4 mx-auto lg:w-64 shadow-2xl rounded-xl flex flex-col h-[350px]">
            <h2 className="text-lg py-1 text-white mb-6 rounded-t-xl bg-green-500 text-center">
              Tasks Activities
            </h2>
            <PieChartPlaceholder data={data} />
            <div className="flex items-center pl-20 gap-1 mt-2">
              <div className={` bg-[#153622]  w-3 h-3 rounded-full `}></div>
              <h2 className="text-[#0F172A] font-medium">Complete</h2>
            </div>
            <div className="flex items-center pl-20  gap-1">
              <div className={` bg-[#1E5034] w-3 h-3 rounded-full `}></div>

              <h1 className="text-[#0F172A] font-medium">In Progress</h1>
            </div>
            <div className="flex items-center  pl-20   gap-1">
              <div className={` bg-[#22C55E] w-3 h-3 rounded-full `}></div>

              <h1 className="text-[#0F172A] font-medium">Reject</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
