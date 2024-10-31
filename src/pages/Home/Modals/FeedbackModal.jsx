import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const FeedbackModal = ({ setIsOpen, isOpen, user, handleFeedback }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
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
                    <h2 className="text-slate-900 text-lg font-medium ">
                      Share Feedback{" "}
                    </h2>
                    <hr className="border border-green-500 flex-1" />
                  </div>
                </div>
                <form onSubmit={handleFeedback} className="space-y-3 mt-8">
                  <div className="flex gap-[60px] items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      disabled
                      value={user?.Employee}
                      className="w-full border text-[#18243E] border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-14 items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                      Email :
                    </label>
                    <input
                      type="email"
                      disabled
                      value={user?.employeeEmail}
                      //   defaultValue={userDetails?.companySize}
                      className="w-full text-[#18243E] border ml-1 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium">Location: </label>
                    <input
                      type="text"
                      disabled
                      value={user?.Location}
                      className="w-full text-[#18243E] border ml-7 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-14">
                    <h2 className="text-[#18243E] font-medium">Photo : </h2>
                    <img
                      src={user?.photo}
                      className="w-24 h-24 rounded-xl"
                      alt="Photo"
                    />
                  </div>
                  <div className="flex gap-5 items-center">
                    <label className=" font-medium text-[#18243E]">Comments: </label>
                  <input required type="text" name="comment" className="w-full text-[#18243E] border ml-1 border-[#D1DED4] bg-[#f9f9f9] py-1 px-5 rounded-full" />
                  </div>

                  {/* Confirm Button */}
                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      className="bg-slate-900 mt-5 text-white px-6 py-2 rounded-full hover:bg-slate-950 focus:outline-none"
                    >
                      Share
                    </button>
                  </div>
                </form>

                <LiaTimesSolid
                  onClick={() => setIsOpen(false)}
                  className="absolute hover:scale-110 text-[#18243E]  top-4 right-4 "
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

FeedbackModal.propTypes = {
  setIsOpen: PropTypes.func,

  user: PropTypes.object,
  isOpen: PropTypes.bool,
};

export default FeedbackModal;
