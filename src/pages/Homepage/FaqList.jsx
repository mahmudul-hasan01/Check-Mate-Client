import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqList = ({title, desc, isOpen, setOpen}) => {
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`flex w-full cursor-pointer ${isOpen && 'mb-2'} justify-between items-center`} 
      >
        <h2 className=" text-[13px] sm:text-base text-slate-900 md:text-lg font-medium text-left">{title}</h2>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && <p className="md:text-base sm:text-sm text-[12px]">{desc}</p>}
    </div>
  );
};

export default FaqList;
