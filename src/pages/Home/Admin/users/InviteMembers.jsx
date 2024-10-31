import { useRef } from 'react';
import Swal from 'sweetalert2';

const InviteMembers = () => {
    const dialogRef = useRef(null);

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const invitation = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const taskName = form.taskName.value;
        const employeeName = form.employeeName.value;
        const email = form.email.value;
        console.log(taskName, employeeName, email);

        // Show SweetAlert after successful form submission
        Swal.fire({
            title: "Invitation Sent Successfully",
            icon: "success",
            confirmButtonText: "Close",
        })
        closeModal(); // Close modal after the SweetAlert confirmation
    };

    return (
        <>
            <button 
                className="bg-[#18243E] flex items-center gap-1 rounded-full text-white py-1 px-5 hover:bg-[#18243E]" 
                onClick={openModal}
            >
                + Invite Members
            </button>

            <dialog ref={dialogRef} className="modal">
                <div className="modal-box">
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                        onClick={closeModal}
                    >
                        ✕
                    </button>

                    <form onSubmit={invitation} className="space-y-2 mt-3">
                        <h3 className="font-bold text-2xl">Invite Members</h3>

                        <select name="taskName" className="select select-bordered w-full" >
                            <option disabled selected>Task Name</option>
                            <option value="Han Solo">Han Solo</option>
                            <option value="Greedo">Greedo</option>
                        </select>

                        <input 
                            type="text" 
                            name="employeeName" 
                            placeholder="Employee Name" 
                            className="input input-bordered w-full" 
                            
                        />

                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email, comma or space separated" 
                            className="input input-bordered w-full" 
                            
                        />

                        <div className="flex justify-end gap-5 pt-4">
                            <button 
                                type="button" 
                                className="btn btn-sm hover:bg-white bg-white border-none" 
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                            <button 
                                type="submit" 
                                className="bg-[#18243E] flex items-center gap-1 rounded-full text-white py-1 px-3 hover:bg-[#18243E]"
                            >
                                Send invite
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default InviteMembers;
