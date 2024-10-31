// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from "prop-types";
// import required modules
import { Pagination } from "swiper/modules";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
const PriceSlide = ({ packages, handlePlan }) => {
 
  return (
    <div className=" relative z-30 w-full   inline-block md:hidden">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full "
      >
        {packages?.map((plan, ind) => (
          <SwiperSlide
            key={plan?._id}
            className={`${
              ind % 2 !== 0
                ? "bg-[#27C661] scale-y-105  text-white"
                : "bg-white text-[#0F172A]"
            } h-[550px] max-w-[346px] mx-auto rounded-lg px-4 py-6 w-full`}
          >
            <h3
              className={`text-lg ${
                ind % 2 === 0 ? "text-[#0F172A]" : "text-white"
              } md:text-xl font-bold mb-4`}
            >
              {plan?.name}
            </h3>
            <h1
              className={`text-6xl font-medium ${
                ind % 2 === 0 ? "text-[#0F172A]" : "text-white"
              }`}
            >
              ${plan?.price}
              <span className=" text-lg   font-normal ">/User</span>
              <span className="text-4xl  ml-6 font-medium">
                {" "}
                $87<span className=" text-base font-normal">/Month</span>
              </span>
            </h1>
            <hr
              className={` my-2  ${
                ind % 2 === 0 ? "border-[#5A5A5A]" : "border-white"
              }`}
            />
            <p
              className={`my-4 ${
                ind % 2 === 0 ? "text-[#000000]" : "text-white"
              }`}
            >
              <span className=" font-medium ">Base Price</span>: $87 for up to 3
              Users <br />
              <span className=" font-medium ">Additional Users</span>: $23 for
              each
              <br /> USD/Billed Annually
            </p>
            <ul className="mt-4 mb-10 space-y-2 text-gray-600">
              {plan?.details?.map((feature, index) => (
                <li
                  className={`flex text-[13px]  items-center gap-2 ${
                    ind % 2 !== 0 ? "text-white" : "text-[#0F172A]"
                  }`}
                  key={index}
                >
                  {ind % 2 !== 0 ? <FaCirclePlus /> : <FaPlusCircle />}
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePlan(plan?._id)}
              className={`mt-6  w-full tece inline-block font-bold hover:scale-105 text-center transition-transform duration-500 uppercase  py-2 px-4 rounded ${
                ind % 2 !== 0
                  ? "bg-white   border-2 text-black border-green-500"
                  : "bg-green-500 text-white"
              }`}
            >
              Get Satrted
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

PriceSlide.propTypes = {
  packages: PropTypes.array,
  handlePlan: PropTypes.func,
 
};

export default PriceSlide;
