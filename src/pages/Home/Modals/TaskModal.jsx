import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const TaskModal = ({ closeModal, isOpen, handleData }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <h2 className="text-slate-900 text-lg font-medium ">
                      Create New Task
                    </h2>
                    <hr className="border border-green-500 flex-1" />
                  </div>
                </div>
                <form onSubmit={handleData} className="space-y-3 mt-8">
                 
                  <div className="flex items-center">
                    <label className="w-1/3 text-[#18243E] text-left pr-4 font-semibold">
                      Task Name:
                    </label>
                    <input
                      type="text"
                      required
                      name="task"
                      placeholder="Task Name"
                      className="w-2/3 px-4 text-[#18243E] py-[6px] border bg-[#f9f9f9] border-gray-300 rounded-full focus:outline-1"
                    />
                  </div>
                 

                  {/* Duration */}
                  <div className="flex items-center">
                    <label className="w-1/3 text-[#18243E] text-left pr-4 font-semibold">
                      Duration:
                    </label>
                    <div className="w-2/3 flex space-x-4">
                      <input
                        required
                        type="text"
                         placeholder="Enter Date"
                        name="date"
                        className="w-1/2 px-4 text-[#18243E] py-[6px] border border-gray-300 bg-[#f9f9f9] rounded-full focus:outline-1"
                      />
                      <input
                        type="text"
                        name="time"
                        placeholder="Enter Time"
                        required
                        className="w-1/2 text-[#18243E] px-4 py-[6px] border border-gray-300 bg-[#f9f9f9] rounded-full focus:outline-1"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center">
                    <label className="w-1/3 text-[#18243E] text-left pr-4 font-semibold">
                      Location:
                    </label>
                    <input
                      required
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="w-2/3 px-4 text-[#18243E] py-[6px] border border-gray-300 bg-[#f9f9f9] rounded-full focus:outline-1"
                    />
                  </div>

                  {/* Employee Name */}
                  <div className="flex items-center">
                    <label className="w-1/3 text-[#18243E] text-left pr-4 font-semibold">
                      Employee Name:
                    </label>
                    <input
                      required
                      type="text"
                      name="ename"
                      placeholder="Employee Name"
                      className="w-2/3 px-4 text-[#18243E] py-[6px] border border-gray-300 bg-[#f9f9f9] rounded-full focus:outline-1"
                    />
                  </div>
                  <div className="flex gap-12">
                    <label className=" whitespace-nowrap text-[#18243E] text-left pr-4 font-semibold">
                      Task Details:
                    </label>
                    <textarea
                      type="text"
                      required
                      name="details" 
                      rows={3} 
                      
                    
                      className=" border w-full text-[#18243E] bg-[#f9f9f9] border-gray-300 rounded-sm focus:outline-1"
                    />
                  </div>
                  {/* Confirm Button */}
                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      className="bg-[#18243E] mt-5 text-white px-6 py-2 rounded-full hover:bg-slate-900 focus:outline-none"
                    >
                      Confirm
                    </button>
                  </div>
                </form>

                <LiaTimesSolid
                  onClick={closeModal}
                  className="absolute hover:scale-110  top-4 right-4 col"
                  size={28}
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

TaskModal.propTypes = {
  closeModal: PropTypes.func,
  handleData: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default TaskModal;
