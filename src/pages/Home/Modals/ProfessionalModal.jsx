import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const ProfessionalModal = ({ closeModal, isOpen, handleData, userDetails }) => {
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
                  <div className="flex items-center gap-3">
                    <h2 className="text-[#18243E] text-lg font-medium ">
                      Edit Personal Information
                    </h2>
                    <hr className="border border-green-500 flex-1" />
                  </div>
                </div>
                <form onSubmit={handleData} className="space-y-3 mt-8">
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                      Company Name:{" "}
                    </label>
                    <input
                      type="text"
                      required
                      name="cname"
                      defaultValue={userDetails?.companyName}
                      className="w-full border text-slate-800 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                      Compnany Size:{" "}
                    </label>
                    <input
                      type="text"
                      required
                      name="csize"
                      defaultValue={userDetails?.companySize}
                      className="w-full border ml-1 text-slate-800 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium">Designation: </label>
                    <input
                      type="text"
                      value={userDetails?.role}
                      disabled
                      className="w-full border text-slate-800 ml-7 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium">Location: </label>
                    <input
                      type="text"
                      required
                      name="location"
                      defaultValue={userDetails?.location || ""}
                      className="w-full border text-slate-800 ml-[52px] border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>

                  {/* Confirm Button */}
                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      className="bg-[#18243E] mt-5 text-white px-6 py-2 rounded-full hover:bg-slate-900 "
                    >
                      Save
                    </button>
                  </div>
                </form>

                <LiaTimesSolid
                  onClick={closeModal}
                  className="absolute hover:scale-110  top-4 right-4 text-slate-900"
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

ProfessionalModal.propTypes = {
  closeModal: PropTypes.func,
  handleData: PropTypes.func,
  userDetails: PropTypes.object,
  isOpen: PropTypes.bool,
};

export default ProfessionalModal;
