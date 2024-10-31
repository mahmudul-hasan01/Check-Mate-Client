import logo from '../../../../assets/1.jpeg'

const CompleteCard = ({item}) => {
    return (
        <div className="bg-[#F9F9F9] border border-gray-300 rounded-xl py-4 px-3 ">
          <div className="flex justify-between items-center">
          
            <h2 className="text-lg font-medium text-[#0F172A]">{item?.task_Name}</h2>
            <h2 className=" text-green-500 border border-green-500 font-medium   px-2 rounded-lg py-[2px] text-xs">
              {item?.Status}
            </h2>
          </div>
          <p className="text-sm my-3 text-gray-600">
            {item?.Details}
          </p>
          <div className="flex gap-3 items-center">
            <h2 className="text-[#0F172A] font-medium text-md">Photo</h2>
            <img className="w-20  rounded-lg" referrerPolicy='no-referrer' src={logo} alt="" />
          </div>
          <h2 className='text-[#0F172A] font-medium mt-3'>Comments: <span className='text-sm text-gray-600'>{item?.feedback || item?.comment}</span> </h2>
        </div>
    );
};

export default CompleteCard;