import { GrCaretNext } from "react-icons/gr";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { GrCaretPrevious } from "react-icons/gr";
import { useState } from "react";
import PropTypes from "prop-types";
const TaskTable = ({ data }) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const totalItem = data?.length;
  const [start, setStart] = useState(1);
  const totalPage = Math.ceil(totalItem / itemPerPage);
  
  const startData = (start - 1) * itemPerPage;
  const endData = start * itemPerPage;
  const newData = data.slice(startData, endData);
  return (
    <div className="bg-white rounded-lg shadow-lg w-full overflow-auto">
      <table className="min-w-full table-auto  custom-table  border-spacing-y-2">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Sl
            </th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Task Name
            </th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Duration
            </th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Location
            </th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Employee
            </th>
            <th className=" border-r  text-sm md:text-base  font-normal py-2 md:py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {newData?.map((task) => (
            <tr key={task._id} className="text-center border-t ">
              <td className=" border-r text-sm whitespace-nowrap font-medium  border-b border-slate-400 text-[#18243E] bg-[#f9f9f9] ">
                {data?.findIndex((item) => item?._id === task?._id) + 1}
              </td>
              <td className=" border-r text-sm border-b font-medium whitespace-nowrap border-slate-400 text-[#18243E] bg-[#f9f9f9] ">
                {task?.task_Name}
              </td>
              <td className=" border-r text-sm border-b font-medium border-slate-400 text-[#18243E] bg-[#f9f9f9]  whitespace-nowrap ">
                {/* {`${task.date}  ${task.time}`} */}
                {task?.date} <br />
                <span className=" text-slate-600 inline-block mt-2">{task?.time}</span>
              </td>
              <td className=" border-r hover:underline text-sm border-b border-slate-400 text-[#18243E] bg-[#f9f9f9]  whitespace-nowrap">
                {task?.Location}
              </td>
              <td className=" border-r text-sm font-medium whitespace-nowrap border-b border-slate-400 text-[#18243E] bg-[#f9f9f9] ">
                {task?.Employee}
              </td>
              <td className=" font-semibold  text-sm whitespace-nowrap border-slate-400 border-b bg-[#f9f9f9] text-[#18243E] ">
                <span
                  className={`
                  ${task?.Status === "Completed" && "text-green-500"}
                  ${task?.Status === "In progress" && "text-yellow-500"}
                  ${task?.Status === "Incomplete" && "text-red-500"}
                  `}
                >
                  {task?.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-green-500 py-[1px] w-full flex justify-end gap-8 pr-8">
        <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
          <h3>Task per page</h3>
          <select
            onChange={(e) => {
              setStart(1);
              setItemPerPage(e.target.value);
            }}
            className=" ml-1 bg-green-500 text-white"
          >
            <option className="bg-white text-black" value="5">
              5
            </option>
            <option className="bg-white text-black" value="7">
              7
            </option>
            <option className="bg-white text-black" value="10">
              10
            </option>
          </select>
        </div>
        <div className="flex gap-1 items-center">
          <button
            disabled={start === 1}
            onClick={() => setStart(start - 1)}
            className=" flex items-center hover:scale-105  font-normal text-right text-white cursor-pointer"
          >
            <TbPlayerTrackPrevFilled className="" />
            <GrCaretPrevious className="" />
          </button>
          <button
            disabled={start === totalPage}
            onClick={() => setStart(start + 1)}
            className=" flex items-center scale-105 cursor-pointer   font-normal text-right text-white"
          >
            <GrCaretNext className="inline-block" />
            <TbPlayerTrackNextFilled className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};
TaskTable.propTypes = {
  data: PropTypes.array,
};
export default TaskTable;
