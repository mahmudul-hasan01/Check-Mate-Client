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

const SubsModal = ({ closeModal, isOpen, str }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white px-10 py-16 text-center  align-middle shadow-xl transition-all">
                <div className=" p-3 rounded-lg ">
                  <h2 className="text-2xl font-bold">
                   Your 7 days free trail ends
                  </h2>
                  <p className="mt-2 mb-4 text-sm">
                    Thank you for trying out Home Program free trail. We hope
                    you enjoyed the experience! To continue using all features,
                    please upgrade to a paid plan.
                  </p>
               
                  <Link
                    to={"/price"}
                    className="mt-4 px-4 py-2 w-full text-white bg-green-500 rounded justify-center flex items-center gap-1 hover:bg-green-600"
                  >
                    Upgrade Now <FaArrowRightLong size={24} />
                  </Link>
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

SubsModal.propTypes = {
  closeModal: PropTypes.func,
  handleData: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default SubsModal;
