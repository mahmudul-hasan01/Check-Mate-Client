import dashboardImage from "../../assets/das10.png"; // Replace with the actual path to the image
import fog from "../../assets/fog3.svg";
import feature from "../../assets/feature2.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProductivitySection = ({ setIsOpen, user }) => {
  const navigate = useNavigate();
  const handleTrail = () => {
    if (!user?.email) {
      navigate("/login");
      return;
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className=" relative py-20 flex items-center justify-center">
      <div className="container relative z-20 mx-auto flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
        <div className="lg:w-[500px]  w-full flex flex-col items-start text-left pl-6 sm:pl-2 md:pl-3 lg:pl-1">
          <h2 className=" text-3xl  md:text-[44px] lg:leading-[77px] font-semibold lg:font-bold text-[#0F172A] ">
            Unlock productivity with{" "}
            <div className=" relative inline-block ">
              <span className=" relative z-20">CheckMateGo!</span>
              <span className=" absolute w-[205px] md:w-[300px] h-[10px] bottom-2 md:bottom-[3px] lg:bottom-[23px] z-10 -left-1 bg-green-500"></span>
            </div>
          </h2>
          <p className="text-[#000000] my-4 md:my-4 text-base lg:text-xl lg:my-7">
            Start your free 7-day trial today.
          </p>
          <button
            onClick={handleTrail}
            className="bg-green-500 text-white text-base lg:text-lg  py-3 px-6 flex items-center gap-1 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            GET STARTED FOR FREE <MdOutlineArrowOutward size={24} />
          </button>
        </div>

        {/* Right Section - Dashboard Image */}
        <div className="px-2 md:px-0 flex justify-end items-center  md:flex-1">
          <img
            src={dashboardImage}
            alt="Dashboard Mockup"
            className="rounded-lg  object-cover   "
          />
        </div>
      </div>
      <img src={fog} className=" h-[400px] absolute md:top-0  top-48" alt="" />
      <img
        src={feature}
        className=" h-[300px] md:h-[400px]  absolute bottom-0 right-0"
        alt=""
      />
    </div>
  );
};

ProductivitySection.propTypes = {
  setIsOpen: PropTypes.func,
  user: PropTypes.object,
};

export default ProductivitySection;
