import React from "react";
import { MdDelete } from "react-icons/md";
import FeedbackModal from "../../Modals/FeedbackModal";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import DeleteModal from "../../Modals/DeleteModal";
const TableRow = ({ user, feedbacks, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };
  const handleDelete = async () => {
    try {
      const { data } = await axiosSecure.delete(`/tasks/${user?._id}`);
      console.log(data);
      if (data?.deletedCount) {
        toast.success("Task Deleted!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFeedback = async (e) => {
    e.preventDefault();
    const adminComment = e.target.comment.value;
    console.log(user?._id);
    try {
      const { data } = await axiosSecure.patch(`/feedback/${user?._id}`, {
        ...user,
        adminComment,
      });
      console.log(data);
      if (data?.modifiedCount) {
        toast.success("Feedback send to the worker!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <tr key={user?._id} className="text-center border-t">
      <td className="px-4 border-r text-[#18243E] whitespace-nowrap bg-[#f9f9f9] py-2">
        {feedbacks?.findIndex((item) => item?._id === user?._id) + 1}
      </td>
      <td className="px-2 border-r text-[#18243E] whitespace-nowrap bg-[#f9f9f9] py-2">
        {user?.Employee}
      </td>
      <td className="px-2 border-r text-[#18243E] whitespace-nowrap bg-[#f9f9f9] py-2">
        {user?.employeeEmail}
      </td>
      <td className="px-2 border-r text-[#18243E] hover:underline whitespace-normal break-words bg-[#f9f9f9] py-2">
        <a
          href={user?.Location}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {user?.Location?.length > 30
            ? user?.Location?.slice(0, 30)
            : user?.Location}
        </a>
      </td>
      <td className="border bg-[#f9f9f9] whitespace-nowrap border-gray-300 px-1 py-2">
        <img
          src={user?.photo}
          alt={user?.task_name}
          className="h-20 w-20 mx-auto object-cover rounded"
        />
      </td>
      <td className="border whitespace-nowrap bg-[#f9f9f9] border-gray-300 px-2 py-2">
        <div className="pb-1 border-b border-green-600 text-left">
          {user?.feedback ? (
            <h2>
              <span className="text-green-500"> Admin</span> : {user?.feedback}{" "}
            </h2>
          ) : (
            "No Comments"
          )}
          {user?.reply && (
            <h2>
              {" "}
              <span className="text-green-500"> Employee</span> {user?.reply}
            </h2>
          )}
        </div>
      </td>
      <td className="px-2  h-[100px] bg-[#f9f9f9]  whitespace-nowrap py-2 border-r flex gap-2 justify-center items-center  space-x-0">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 flex items-center text-white py-1 px-3 rounded-full hover:bg-blue-600"
        >
          <IoEyeOutline />
          View
        </button>
        <FeedbackModal
          user={user}
          handleFeedback={handleFeedback}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeModal={closeModal}
        />

        <button
          onClick={() => setIsDeleteOpen(true)}
          className="bg-red-500 flex items-center text-white py-1 px-3 rounded-full hover:bg-red-600"
        >
          <MdDelete />
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

export default TableRow;
