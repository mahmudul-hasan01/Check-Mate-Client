import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { ImSpinner9 } from "react-icons/im";
// import { ImSpinner9 } from "react-icons/im";

const CreatePackageModal = ({ closeModal, isOpen, handleData, item, index, setDetails, details, loading }) => {
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
              <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            
                <form onSubmit={handleData} className="space-y-3 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div className="flex gap-3 lg:col-span-2 items-center">
                    <label className="text-[#18243E]  font-medium whitespace-nowrap">
                      Package Name:{" "}
                    </label>
                    <input
                      type="text"
                      required
                      name="pname"
                     defaultValue={item?.name}
                      className="w-full text-[#18243E] border border-green-500 bg-transparent py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                      Price:{" "}
                    </label>
                    <input
                      type="number"
                      required
                      name="price"
                      defaultValue={item?.price}
                      className="w-full ml-[68px] md:ml-0 text-[#18243E] border border-green-500 bg-transparent py-1 px-5 rounded-full "
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    <label className="text-[#18243E] font-medium whitespace-nowrap">
                     Duration: 
                    </label>
                    <input
                      type="text"
                      required
                      name="duration"
                      defaultValue={item?.duration}
                      className="w-full  ml-12 md:ml-0 text-[#18243E] border border-green-500 bg-transparentpy-1 py-1 px-5 rounded-full "
                    />
                  </div>
                </div>
                  <div className="flex gap-3">
                    <label className="text-[#18243E]  font-medium whitespace-nowrap">
                     Package Details: 
                    </label>
                    <textarea required
                    // defaultValue={item?.details.split('\n')}
                    value={details.join('\n')}
                    onChange={(e) => setDetails(e.target.value.split("\n"))}
                    name="details" className="w-full text-[#18243E] border border-green-500 bg-transparent py-1 px-5 rounded-md " rows={8} cols={10} ></textarea>
                  </div>
                  

                 

                  {/* Confirm Button */}
                  <div className="flex justify-end ">
                    <button
                    disabled={loading}
                      type="submit"
                      className="bg-[#18243E] mt-5 text-white px-6 py-2 rounded-full hover:bg-slate-800 disabled:bg-slate-700 focus:outline-none"
                    >
                      {loading ? <ImSpinner9 size={24} className="animate-spin m-auto"/> : 'Save'}
                    </button>
                  </div>
                </form>

                <LiaTimesSolid
                  onClick={closeModal}
                  className="absolute hover:scale-110  top-6 right-4 text-[#18243E]"
                  size={28}
                />
                <button className="bg-[#18243E] 0 py-[6px] px-8 rounded-lg text-white absolute top-6 left-4">Package {index + 1}</button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

CreatePackageModal.propTypes = {
  closeModal: PropTypes.func,
  handleData: PropTypes.func,
  item: PropTypes.object,
  index: PropTypes.number,
  setDetails: PropTypes.func,
  loading: PropTypes.bool,
  details: PropTypes.array,
 
  isOpen: PropTypes.bool,
};

export default CreatePackageModal;
