import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FaCirclePlus } from "react-icons/fa6";
// import { FaCirclePlus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Price = () => {
  const navigate = useNavigate();

  const { data: packages = [], isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/packages`
      );
      console.log(data);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <AiOutlineLoading3Quarters size={50} className="animate-spin m-auto" />
      </div>
    );
  return (
    <div className=" relative min-h-screen flex bg-white items-center justify-center">
      <div className=" mt-8 md:mt-4 lg:mt-2  container mx-auto mb-12 ">
        <h2 className="text-3xl text-slate-900 md:text-4xl lg:text-5xl font-bold text-center mb-10">
          Pricing Plan
        </h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-6 px-2 md:px-6 lg:px-12 ">
          {packages?.map((plan, ind) => (
            <div
              key={plan?._id}
              className={`${
                ind % 2 !== 0
                  ? "bg-[#27C661] scale-y-105  text-white"
                  : "bg-white text-[#0F172A]"
              } shadow-xl hover:shadow-2xl min-w-[300px] max-w-[400px] mx-auto rounded-lg p-6 w-full`}
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
                <span className="text-4xl  ml-4 font-medium">
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
                <span className=" font-medium ">Base Price</span>: $87 for up to
                3 Users <br />
                <span className=" font-medium ">Additional Users</span>: $23 for
                each
                <br /> USD/Billed Annually
              </p>
              <ul className="mt-4 mb-6 space-y-2 text-gray-600">
                {plan?.details?.map((feature, index) => (
                  <li
                    className={`flex items-center gap-2 ${
                      ind % 2 !== 0 ? "text-white" : "text-[#0F172A]"
                    }`}
                    key={index}
                  >
                    {ind % 2 !== 0 ? <FaCirclePlus /> : <FaPlusCircle />}
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/subscription/${plan?._id}`}
                className={`mt-6  w-full tece inline-block font-bold hover:scale-105 text-center transition-transform duration-500 uppercase  py-2 px-4 rounded ${
                  ind % 2 !== 0
                    ? "bg-white   border-2 text-black border-green-500"
                    : "bg-green-500 text-white"
                }`}
              >
                Get Satrted
              </Link>
            </div>
          ))}
        </div>
        <div className=" relative z-30 w-full   inline-block md:hidden">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
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
                } h-[550px] shadow-2xl max-w-[346px] mx-auto rounded-lg px-4 py-6 w-full`}
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
                  <span className=" font-medium ">Base Price</span>: $87 for up
                  to 3 Users <br />
                  <span className=" font-medium ">Additional Users</span>: $23
                  for each
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
                <Link
                  to={`/subscription/${plan?._id}`}
                  className={`mt-6  w-full tece inline-block font-bold hover:scale-105 text-center transition-transform duration-500 uppercase  py-2 px-4 rounded ${
                    ind % 2 !== 0
                      ? "bg-white   border-2 text-black border-green-500"
                      : "bg-green-500 text-white"
                  }`}
                >
                  Get Satrted
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="text-xl md:text-2xl  lg:text-3xl text-slate-800 font-bold absolute top-4 left-8 hover:bg-slate-100 py-2 px-3 rounded-xl"
      >
        Back
      </button>
    </div>
  );
};

export default Price;
