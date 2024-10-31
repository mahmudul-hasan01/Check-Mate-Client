import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import bg from "../../../../assets/bg.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const SubscriptionForm = () => {
  const navigate = useNavigate();
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  const { id } = useParams();
  const { data: packages = {}, isLoading } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/package/${id}`
      );
      console.log(data);
      return data;
    },
  });
  if (isLoading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
         <AiOutlineLoading3Quarters size={50} className="animate-spin m-auto" />
      </div>
    );
  return (
    <div className="flex flex-col-reverse bg-white relative   lg:flex-row justify-center gap-24 min-h-screen items-center px-6 md:px-16 lg:px-32 ">
      <div className="flex-1  z-20">
        <Elements stripe={stripePromise}>
          <CheckoutForm packages={packages} />
        </Elements>
      </div>
      <div className="lg:w-[350px] xl:w-[400px]  mt-24 lg:mt-4 z-20">
        <h2 className="text-2xl md:text-3xl text-slate-800 font-medium ">You are Paying</h2>
        <h2 className="text-4xl md:text-6xl text-slate-950 mt-4 mb-8 font-bold ">
          ${packages?.price}
        </h2>

        <ul className="mt-6 border-b-[1px] border-slate-800 pb-6 text-[#24402B]   text-left space-y-2 ">
          {packages?.details?.map((lists, index) => (
            <li key={index} className="text-slate-800 font-[500]">
              ✔ {lists}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl from-emerald-50 font-bold text-slate-950">
            Tax{" "}
          </h2>
          <h2 className=" text-xl from-emerald-50 font-bold text-slate-950">
            $ 0
          </h2>
        </div>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl from-emerald-50 font-bold text-slate-950">
            Total{" "}
          </h2>
          <h2 className="text-xl from-emerald-50 font-bold text-slate-950">
            $ {packages?.price}
          </h2>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-no-repeat opacity-5 absolute bg-center bg-cover min-h-screen w-full"
      ></div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="py-2 px-4 text-xl md:text-3xl hover:bg-green-50 rounded-xl font-bold text-slate-800 absolute top-4 md:top-12  left-4 md:left-12"
      >
        Back
      </button>
    </div>
  );
};

export default SubscriptionForm;
