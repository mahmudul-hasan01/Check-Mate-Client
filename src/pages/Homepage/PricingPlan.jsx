import { FaCirclePlus } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

import Loading from "./Loading";
import Swal from "sweetalert2";
import logo1 from "../../assets/feature1.svg";
import PriceSlide from "./PriceSlide";

const PricingPlan = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
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
  const handlePlan = (id) => {
    if (!user?.email) {
      Swal.fire({
        title: "You are not Logged In?",

        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: `/subscription/${id}` });
        }
      });

      return;
    } else {
      navigate(`/subscription/${id}`);
    }
    console.log(id);
  };
  if (isLoading) return <Loading />;
  return (
    <div className=" relative mb-72">
      <div className=" mt-12  relative z-10  xl:mx-[110px] mb-12 ">
        <h2 className="text-3xl mb-8 md:text-4xl lg:text-5xl text-[#0F172A] font-bold text-center">
          Pricing Plan
        </h2>
        <div className="md:grid hidden md:grid-cols-2 items-center lg:grid-cols-3 gap-6 px-2 md:px-6 lg:px-12 ">
          {packages?.map((plan, ind) => (
            <div
              key={plan?._id}
              className={`${
                ind % 2 !== 0
                  ? "bg-[#27C661] scale-y-105  text-white"
                  : "bg-white text-[#0F172A]"
              } shadow-xl hover:shadow-2xl max-w-[396px] mx-auto rounded-lg p-6 w-full`}
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
                <span className=" font-medium ">Base Price</span>: $87 for up to
                3 Users <br />
                <span className=" font-medium ">Additional Users</span>: $23 for
                each
                <br /> USD/Billed Annually
              </p>
              <ul className="mt-4 mb-10 space-y-2 text-gray-600">
                {plan?.details?.map((feature, index) => (
                  <li
                    className={`flex items-center text-[15px] gap-2 ${
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
            </div>
          ))}
        </div>
        <PriceSlide handlePlan={handlePlan} packages={packages}/>
      </div>
      <img
        className="absolute -bottom-36 h-[350px] md:h-[400px] lg:h-[450px] "
        src={logo1}
        alt=""
      />
    </div>
  );
};

export default PricingPlan;
