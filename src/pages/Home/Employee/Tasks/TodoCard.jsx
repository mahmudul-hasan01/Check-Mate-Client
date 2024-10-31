import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TodoCard = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  // const { employeeRefetch } = useAuth()
  const updateStatus = async () => {
    try {
      const { data } = await axiosSecure.patch(`/update-task/${item?._id}`);
      console.log(data);
      if (data?.modifiedCount) {
        refetch();
        console.log("Modified");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="bg-white relative group w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#18243E]">
            {item?.task_Name}
          </h2>
          <p className="text-sm font-medium text-[#18243E]">{item?.time}</p>
        </div>
        <p className="text-sm text-gray-600 mt-1">{item?.Details}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 mt-4">
            <p className="text-sm font-medium text-[#18243E]">Assigned by</p>
            <img
              src={item?.assignedBy?.image}
              alt="assigned-by"
              className="w-8 h-8 rounded-full mr-2"
            />
          </div>
          <p className="text-sm text-red-600 font-semibold mt-4">
            Due {item?.date}
          </p>
        </div>
      </div>
      <div className=" bg-black/5 flex justify-center translate-y-full group-hover:-translate-y-0 absolute  opacity-0 group-hover:opacity-100 py-4 bg-opacity-10 left-1/2 -translate-x-1/2 w-full backdrop-blur-[1px] bottom-0 transition-transform duration-300 pr-1">
        <button
          onClick={updateStatus}
          className="bg-green-500 text-white py-[6px] px-4 hover:scale-105 rounded-sm"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
