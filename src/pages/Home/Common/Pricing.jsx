import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TrailModal from "../Modals/TrailModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const Pricing = () => {
  const navigate = useNavigate();
  const {
    user,
    userDetails: {
      user: { subscription = {} },
    },
  } = useAuth();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/packages`
      );
      console.log(data);
      return data;
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  console.log(subscription);

  const handleTrail = async () => {
    if(!user){
      toast.error('Please Login First!!!')
      return ;
    }
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/trail/${user?.email}`
      );
      console.log(data);
      if (data?.modifiedCount) {
        toast.success("Your using 7 days free trails");
        setIsOpen(false);
      } else {
        toast.error(data?.message);
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    if (subscription?.status !== "paid") {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, []);
  return (
    <div className=" flex flex-col justify-center min-h-screen py-10">
      {/* Heading */}
      <div className="text-center  mb-10">
        <h2 className="text-xl md:text-2xl md:w-9/12 lg:w-full lg:text-3xl mx-auto font-bold text-[#24402B]">
          For a limited time get the first 2 months of Checkmate’s Scaling Up
          package 50% off
        </h2>
        <p className="text-lg text-[#24402B] my-4 w-full px-2 md:px-1 md:w-7/12 mx-auto text-center">
          Access our &apos;Scaling Up&apos; package for two months at half the
          price. Save time, grow revenue, and deliver a seamless customer
          experience with Skimmer&apos;s industry-leading pool service platform.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Getting Started */}
        {packages?.map((item) => (
          <div
            key={item._id}
            className="bg-white transition-transform duration-500 text-center hover:bg-[#f9f9f9] hover:shadow-xl py-8  rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl  font-medium text-[#24402B] ">
              {item?.name}
            </h3>
            <p className="text-xl text-[#24402B] font-medium mt-2">
              $ {item?.price}
            </p>
            <p className="text-sm text-gray-500">Per serviced location/month</p>
            <Link
              to={`/subscription/${item?._id}`}
              className="mt-3 bg-[#487253] font-medium text-white py-2 inline-block  px-4 rounded-md hover:bg-green-800"
            >
              Get started
            </Link>

            <ul className="mt-6 text-[#24402B]  px-8 text-left space-y-2 ">
              {item?.details?.map((lists, index) => (
                <li key={index} className="font-[500]">
                  ✔ {lists}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <TrailModal
          handleData={handleTrail}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      </div>
      <Link
        onClick={() => {
          navigate(-1);
        }}
        className="absolute  top-4 left-3 text-2xl font-bold py-2 px-4 rounded-xl hover:bg-green-50 text-green-900"
      >
        Back
      </Link>
    </div>
  );
};

export default Pricing;
