import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { useState } from "react";

import UserRow from "./UserRow";

const UserTable = ({ title, users, refetch }) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const totalItem = users?.length;
  const [start, setStart] = useState(1);
  const totalPage = Math.ceil(totalItem / itemPerPage);
  console.log(itemPerPage);
  const startData = (start - 1) * itemPerPage;
  const endData = start * itemPerPage;
  const newData = users?.slice(startData, endData);
  console.log(newData);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-base text-[#18243E] text-sm whitespace-nowrap font-semibold  hover:bg-slate-100  py-2 px-4 rounded-lg mb-2 inline-block">
          {title}
        </h3>

        {/* Search and Date Picker */}
        <div className="flex items-center justify-end gap-4 ">
          <div>
            <button className="flex bg-slate-800 text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
              <IoSearchSharp size={22} />
              Search
            </button>
          </div>
          <div>
            <select className="py-2 px-4 border bg-white text-slate-800 font-medium border-slate-800 rounded-lg">
              <option>August 2024</option>
              <option>September 2024</option>
              <option>October 2024</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className=" text-white">
            <tr className="bg-green-500">
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">
                Sl
              </th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">
                Name
              </th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">
                Email
              </th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">
                Subscription Status
              </th>
              <th className=" border-r text-sm whitespace-nowrap md:text-base py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.length === 0 ? (
              <p className="text-xl text-[#18243E] font-bold text-center my-2">
                No user purchased this plan
              </p>
            ) : (
              newData?.map((user) => <UserRow refetch={refetch} key={user?._id} user={user} users={users}></UserRow>)
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-green-500 py-[2px] w-auto flex justify-end gap-8 pr-8">
          <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
            <h3>Page per page</h3>
            <select
              onChange={(e) => {
                setItemPerPage(e.target.value);
                setStart(1);
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
              className=" flex items-center cursor-pointer  font-normal text-right text-white"
            >
              <TbPlayerTrackPrevFilled className="" />
              <GrCaretPrevious className="" />
            </button>
            <button
              onClick={() => setStart(start + 1)}
              disabled={start === totalPage}
              className=" flex items-center  font-normal cursor-pointer text-right text-white"
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

export default UserTable;
