import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const CheckoutForm = ({ packages }) => {
  const navigate = useNavigate();
  console.log(packages);
  const stripe = useStripe();
  const {
    userDetails: { user: paidUser },
  } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const elements = useElements();
  console.log(paidUser);
  const datas = { ...packages };
  console.log(datas);
  delete datas._id;
  console.log(datas);
  useEffect(() => {
    if (packages?.price && packages?.price > 1)
      getClientSecret({ price: packages?.price });
  }, []);
  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", price);
    console.log(data);
    setClientSecret(data.clientSecret);
  };
  console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error?.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: paidUser?.email,
            name: paidUser?.name,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setProcessing(false);
      setCardError(confirmError?.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const userData = {
        name: paidUser?.name,
        email: paidUser?.email,
        companyDetails: {
          companyName: paidUser?.companyName,
          companySize: paidUser?.companySize,
        },
        subscriptionDetails: {
          plan: packages?.name,
          price: packages?.price,
        },
        bookedAt: new Date(),
        transactionId: paymentIntent?.id,
      };

      console.table(userData);
      try {
        const { data } = await axiosSecure.put("/subscribe", {
          userData,
          datas,
        });
        console.log(data);
        if (data?.result?.insertedId) {
          toast.success("Subscription plan Booked!!!");
          navigate("/");
        }
      } catch (error) {
        toast.error(error?.message);
      } finally {
        setProcessing(false);
      }
    }
    setProcessing(false);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <h2 className="text-3xl text-slate-900 md:text-4xl lg:text-5xl font-bold  mb-4">
        Lets Make Payment
      </h2>
      <p className="text-lg  md:text-xl  text-slate-700 mb-8">
        To start your subscription, input your card details to make payment
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-3  font-medium text-gray-700">
            Cardholder&apos;s Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-3 py-2 border bg-transparent placeholder:text-slate-500 text-slate-900 border-green-400 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <div className="w-full rounded-md flex items-center">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    border: "1px solid green",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
              className="flex-grow"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 mt-4 py-2 font-bold px-5 rounded-full text-white"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9 size={24} className="animate-spin m-auto" />
          ) : (
            `Pay $${packages?.price || "XX"}`
          )}
        </button>
      </form>
      {cardError && <p className=" text-lg text-red-500">{cardError}</p>}
    </div>
  );
};

CheckoutForm.propTypes = {
  packages: PropTypes.object,
};

export default CheckoutForm;
