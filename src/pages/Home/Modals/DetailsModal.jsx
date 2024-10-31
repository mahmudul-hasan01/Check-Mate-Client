import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const DetailsModal = ({ closeModal, isOpen, user }) => {
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
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-8">
                  <div className="flex items-center mb-8 gap-3">
                    <h2 className="text-slate-800 text-lg font-medium ">User Details </h2>
                    <hr className="border border-green-500 flex-1" />
                  </div>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className="flex ">
                   
                    <img
                    referrerPolicy="no-referrer"
                      src={user?.image}
                      className="w-24 h-24 rounded-xl"
                      alt="Photo"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <label className="text-[#18243E] font-medium whitespace-nowrap">
                        Name:{" "}
                      </label>
                      <h2 className="text-[#18243E] font-medium ">{user?.name}</h2>
                    </div>
                    <div className="flex my-3 items-center">
                      <label className=" text-[#18243E] font-medium whitespace-nowrap">
                        Email :
                      </label>
                      <h2 className="text-[#18243E] font-medium ">{user?.email}</h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8 items-center">
                  <label className="text-[#18243E] font-medium">Subscription Plan: </label>
                  <h2 className="text-[#18243E] font-medium ">{user?.subscription?.type}</h2>
                </div>

             

                <LiaTimesSolid
                  onClick={closeModal}
                  className="absolute cursor-pointer hover:scale-110  top-4 right-4 text-[#18243E]"
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

DetailsModal.propTypes = {
  closeModal: PropTypes.func,

  user: PropTypes.object,
  isOpen: PropTypes.bool,
};

export default DetailsModal;
