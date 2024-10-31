import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import {} from "react-icons/md";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TableRow from "./TableRow";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Feedback = () => {
  const {
    data: feedbacks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks-completed`
      );
      console.log(data);
      return data;
    },
  });

  const [itemPerPage, setItemPerPage] = useState(5);
  const totalItem = feedbacks?.length;
  const [start, setStart] = useState(1);
  const totalPage = Math.ceil(totalItem / itemPerPage);
  console.log(itemPerPage);
  const startData = (start - 1) * itemPerPage;
  const endData = start * itemPerPage;
  const newData = feedbacks.slice(startData, endData);

  if (isLoading)
    return (
      <div className="min-h-[500px] flex justify-center items-center">
        <AiOutlineLoading3Quarters
          size={50}
          className="animate-spin text-black m-auto"
        />
      </div>
    );

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center gap-6 mb-3">
        <h2 className="text-xl font-bold text-slate-800">Feedback</h2>
        <hr className="flex-1 border" />
      </div>
      <div className="flex items-center justify-end gap-4 mb-4">
        <div>
          <button className="flex bg-slate-800 text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
            <IoSearchSharp size={26} />
            Search
          </button>
        </div>
        <div>
          <select className="py-2 bg-white px-4 border text-slate-800 font-medium border-slate-800 rounded-lg">
            <option>August 2024</option>
            <option>September 2024</option>
            <option>October 2024</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto"></div>
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Sl
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Name
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Email
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Location
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Photos
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Comments
              </th>
              <th className="border border-gray-300 whitespace-nowrap py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newData?.map((user) => (
              <TableRow
                refetch={refetch}
                key={user?._id}
                user={user}
                feedbacks={feedbacks}
              />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-green-500 py-[2px] w-auto flex justify-end gap-8 pr-8">
          <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
            <h3>Item per page</h3>
            <select
              onChange={(e) => {
                setStart(1);
                setItemPerPage(parseInt(e.target.value));
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
              onClick={() => setStart(start - 1)}
              disabled={start === 1}
              className=" flex items-center  cursor-pointer font-normal text-right text-white"
            >
              <TbPlayerTrackPrevFilled className="" />
              <GrCaretPrevious className="" />
            </button>
            <button
              onClick={() => setStart(start + 1)}
              disabled={start === totalPage}
              className=" flex items-center  font-normal text-right text-white"
            >
              <GrCaretNext className="inline-block" />
              <TbPlayerTrackNextFilled className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
