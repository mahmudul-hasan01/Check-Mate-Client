import { BsThreeDots } from "react-icons/bs";
import ProgressCard from "../ProgressCard";
import { useState } from "react";


import PropTypes from "prop-types";
const Progress = ({ data, refetch }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h2 className="bg-green-500 mb-5 py-2 px-3 flex justify-between text-lg font-medium rounded-lg w-full text-white">
        In Progress{" "}
        <BsThreeDots
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          size={32}
        />
      </h2>
      {isOpen && (
        <div className="flex flex-col gap-5">
          {data?.map((item) => (
            <ProgressCard refetch={refetch} key={item?._id} item={item} />
          ))}
          
        </div>
      )}
    </div>
  );
};
Progress.propTypes = {
  data: PropTypes.array,
  refetch: PropTypes.func,
}
export default Progress;
