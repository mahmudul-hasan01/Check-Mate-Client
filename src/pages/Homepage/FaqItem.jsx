import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import FaqList from "./FaqList";
const FaqItem = ({ title, desc }) => {
    const [open, setOpen] = useState(false);
  return (
    <div className=" px-2 py-3 md:px-4 md:py-4 bg-white text-black rounded-lg">
     <FaqList title={title} desc={desc} isOpen={open} setOpen={setOpen}/>
    </div>
  );
};

export default FaqItem;
