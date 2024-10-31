
const Create = () => {

    const invitation = (e) => {
        e.preventDefault()
        const form = e.target
        const taskName = form.taskName.value
        const members = form.members.value
        console.log(taskName,members);
    
      }

    return (
        <>
            <button className="bg-[#18243E] flex items-center gap-1 rounded-full text-white py-1 px-5  hover:bg-[#18243E]" onClick={() => document.getElementById('my_modal_4').showModal()}>+ Create</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={invitation} className="space-y-2 mt-3">

                        <h3 className="font-bold text-2xl">Create New Task</h3>

                        <input type="text" name="taskName" placeholder="Task Name" className="input input-bordered w-full" />

                        <input type="text" name="members" placeholder="Number of Members" className="input input-bordered w-full" />


                        <div className="flex justify-end gap-5 pt-4">

                            <form method="dialog">
                                <button className="btn btn-sm hover:bg-white bg-white border-none">Cancel</button>
                            </form>

                            <button type="submit" className="bg-[#18243E] flex items-center gap-1 rounded-full text-white py-1 px-3  hover:bg-[#18243E]">Create</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Create;