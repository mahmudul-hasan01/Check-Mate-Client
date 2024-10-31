import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FirstModal = ({ closeModal, isOpen }) => {
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
              <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-xl bg-white px-10 py-16 text-center  align-middle shadow-xl transition-all">
                <h2 className="text-[#24402B] font-bold mb-3 text-4xl">
                  Your Free 7 days Trail Ends
                </h2>

                <div className="flex justify-center ">
                  <Link
                    to={"/price"}
                    
                    className="bg-gradient-to-r from-[#4F7D5B] to-green-900 flex items-center gap-1 mt-5 text-white px-6 py-1 rounded-full hover:from-green-800 hover:to-green-950 focus:outline-none text-xl"
                  >
                    Update Plan <FaArrowRightLong size={28} />
                  </Link>
                  {/* <Link
                    to={'/subscription'}
                      type="submit"
                      className="bg-gradient-to-r from-[#4F7D5B] to-green-900 flex items-center gap-1 mt-5 text-white px-6 py-1 rounded-full hover:from-green-800 hover:to-green-950 focus:outline-none text-xl"
                    >
                      Start Trail <FaArrowRightLong size={28} />
                    </Link> */}
                </div>

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

FirstModal.propTypes = {
  closeModal: PropTypes.func,
  handleData: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default FirstModal;
