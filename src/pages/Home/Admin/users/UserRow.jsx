import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import DetailsModal from "../../Modals/DetailsModal";
import { useState } from "react";
import DeleteModal from "../../Modals/DeleteModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const UserRow = ({ user, users, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const closeDeleteModal = () => {
    setDeleteOpen(false);
  };
  const handleDelete = async () => {
    try {
      const { data } = await axiosSecure.delete(`/delete-user/${user?.email}`);
      console.log(data);
      if (data?.result?.deletedCount) {
        toast.success("User Deleted!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr className="text-center border-t">
      <td className="px-4 whitespace-nowrap text-[#18243E] border-r bg-[#f9f9f9] py-2">
        {users?.findIndex((item) => item?._id === user?._id) + 1}
      </td>
      <td className="px-2 whitespace-nowrap text-[#18243E]  border-r bg-[#f9f9f9] py-2">
        {user.name}
      </td>
      <td className="px-2  whitespace-nowrap text-[#18243E] border-r bg-[#f9f9f9] py-2">
        {user.email}
      </td>
      <td className="px-2 whitespace-nowrap text-[#18243E] border-r bg-[#f9f9f9] py-2">
        <span
          className={` ${
            user?.subscription?.status === "paid"
              ? "text-green-600"
              : "text-red-600"
          } border-r bg-[#f9f9f9] font-semibold`}
        >
          {user?.subscription?.status}
        </span>
      </td>
      <td className="px-2  whitespace-nowrap py-2 border-r flex gap-2 justify-center items-center bg-[#f9f9f9] space-x-0">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#6C6EFE] flex items-center gap-1 rounded-full text-white py-1 px-3  hover:bg-blue-600"
        >
          <IoEyeOutline className=" " size={20} />
          <h2 className=" text-base text-white ">View</h2>
        </button>
        <DetailsModal isOpen={isOpen} closeModal={closeModal} user={user} />
        <button
          onClick={() => setDeleteOpen(true)}
          className="bg-red-500 flex items-center gap-1 rounded-full text-white py-1 px-3  hover:bg-red-600"
        >
          <MdDelete size={20} />
          Delete
        </button>
        <DeleteModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
          handleDelete={handleDelete}
        />
      </td>
    </tr>
  );
};

export default UserRow;
