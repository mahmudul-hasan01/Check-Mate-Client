import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="h-[300px] flex items-center justify-center">
      <AiOutlineLoading3Quarters size={50} className="animate-spin text-black m-auto" />
    </div>
  );
};

export default Loading;
