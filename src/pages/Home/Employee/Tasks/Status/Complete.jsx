import { BsThreeDots } from "react-icons/bs";
import CompleteCard from "../CompleteCard";
import { useState } from "react";

const Complete = ({data}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h2 className="bg-green-500 mb-5 py-2 px-3 flex justify-between text-lg font-medium rounded-lg w-full text-white">
        Complete <BsThreeDots className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} size={32} />
      </h2>
      {
        isOpen && <div className="flex flex-col gap-5">
    {
      data?.map(item => <CompleteCard key={item?._id} item={item}/>)
    }
        
      </div>
      }
    </div>
  );
};

export default Complete;
