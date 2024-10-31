import { BsThreeDots } from "react-icons/bs";
import TodoCard from "../TodoCard";
import { useState } from "react";

const Todo = ({data, refetch}) => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <h2 className="bg-green-500 mb-5 py-2 px-3 flex justify-between text-lg font-medium rounded-lg w-full text-white">
        To Do <BsThreeDots onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" size={32} />
      </h2>
      {
        isOpen && <div className="flex flex-col gap-5">
       {
        data?.map(item => <TodoCard refetch={refetch} key={item?._id} item={item}/>)
       }
      </div>
      }
    </div>
  );
};

export default Todo;
