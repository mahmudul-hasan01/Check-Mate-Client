import logo from "../../assets/pro.png";

import fog from "../../assets/fog3.svg";
import feature from "../../assets/feature2.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import vector from "../../assets/VECTOR3.svg";
const NewsLetter = ({ setIsOpen, user }) => {
  const navigate = useNavigate();
  const handleTrail = () => {
    if (!user?.email) {
      navigate('/login')
      return;
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className=" relative mt-12">
      <div className=" relative container mx-auto mt-20  flex gap-8 md:gap-0 flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-[550px] lg:w-[600px] relative z-20 flex flex-col justify-center items-start px-3 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Try{" "}
            <div className=" relative inline-block">
              <span className="mx-2 relative z-20">CheckMateGo.</span>
              <span className=" absolute w-[200px] md:w-[320px] h-[8px] md:h-[12px] bottom-2 md:bottom-[6px] z-10 left-1 bg-green-500"></span>
            </div>
            for Free.
          </h1>
          <p className="text-[#000000] md:w-7/12 text-lg md:text-xl mb-6">
            Learn the app in less than an hour. Become a pro in less than a day.
          </p>
          {/* Email Input */}
          <div className="flex flex-col gap-4 w-full md:max-w-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-10/12 p-3 border bg-transparent border-gray-500 focus:outline-none 
              rounded-lg text-slate-900 placeholder:text-slate-700 focus:ring-2 focus:ring-green-500"
            />
            <div className=" flex  gap-3 md:gap-4 items-center">
              <button
                onClick={handleTrail}
                className="bg-green-500 text-white px-6 py-3 rounded-md 
             hover:bg-green-600 transition text-[12px] sm:text-sm md:text-base flex items-center gap-1"
              >
                GET STARTED FOR FREE <MdOutlineArrowOutward size={24} />
              </button>
              <Link
                to={"/see-price"}
                className=" text-[#0F172A] text-[12px] sm:text-sm md:text-base border border-[#0F172A] rounded-md px-4 md:px-6 py-3 hover:bg-black hover:text-white    transition-all duration-500"
              >
                SEE PRICING PLANS
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Image and Dashboard Preview) */}
        <div className="flex-1 relative z-20 flex items-center justify-center p-0 md:p-8 ">
          <img src={logo} className=" w-auto" alt="" />
        </div>
      </div>
      <img
        src={vector}
        className="absolute hidden lg:inline-block -top-10 left-0"
      />
      <img
        src={fog}
        className="absolute w-[400px] 
        top-24
        md:-top-12 left-1/2 -translate-x-1/2"
        alt=""
      />
    </div>
  );
};

export default NewsLetter;
