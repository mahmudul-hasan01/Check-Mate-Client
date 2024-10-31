import toast from "react-hot-toast";
import Connect from "./Connect";
import Faq from "./Faq";
import Feature from "./Feature";
import FooterHome from "./FooterHome";
import Header from "./Header";
import Nav from "./Nav";
import NewsLetter from "./NewsLetter";
import PricingPlan from "./PricingPlan";
import ProductivitySection from "./ProductivitySection";
import Rings from "./Rings";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import TrailModal from "../Home/Modals/TrailModal";
import moment from "moment";
import SubsModal from "../Home/Modals/SubsModal";
import EndPlanModal from "../Home/Modals/EndPlanModal";
import { useQuery } from "@tanstack/react-query";
const Homepage = () => {
  const { userDetails: { user } = {}, loading } = useAuth() || {};
  // console.log(user)
  const { data: isFirst, refetch } = useQuery({
    queryKey: ['isFirst', user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async() => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/first-data/${user?.email}`)
      // console.log(data)
      return data?.subscription?.isFirst
    }
  })
  console.log(isFirst)
  const [isOpen, setIsOpen] = useState(false);
  const [trailOpen, setTrailOpen] = useState(false);
  const [plan, setPlan] = useState(false);
  const closeTrail = () => {
    setTrailOpen(false);
  };
  const handleTrail = async () => {
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

  const removeFirstTime = async () => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/first-data/${user?.email}`
      );
      console.log(data);
      refetch();
    } catch (error) {
      console.log(error?.message);
    }
  };

  // useEffect(() => {
  //   console.log(user?.subscription?.isFirst)
  //   if (user?.email && isFirst) {
  //     setTimeout(() => {
        
  //       setIsOpen(true);
  //       removeFirstTime();
  //     }, 4000);
  //     setIsOpen(true);
  //   }
  // }, [user]);
  const closeModal = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   // Current time
  //   const comparisonDate = moment(); // Set to current date and time
  //   console.log(user?.subscription);
  //   // Check if trailEndDate is valid and compare with current time
  //   if (
  //     user?.subscription?.type === "Trail" &&
  //     moment(user?.subscription?.trailEndDate).isValid() &&
  //     moment(user?.subscription?.trailEndDate).isBefore(comparisonDate)
  //   ) {
  //     const intervalId = setInterval(() => {
  //       console.log('Herrrrrrrrrrrrrrrrrrrr')
  //       setTrailOpen(true);
  //     }, 240000);
  //     return () => clearInterval(intervalId);
  //   }
  // }, [user, setTrailOpen]);

  // Plan end Modal Part
  // useEffect(() => {
  //   // Current time
  //   const comparisonDate = moment().add(35, "days"); // Set to current date and time
  //   console.log(user?.subscription);
  //   // Check if trailEndDate is valid and compare with current time
  //   if (
  //     user?.subscription?.type === "Home Program" &&
  //     moment(user?.subscription?.startedDate).isValid() &&
  //     moment(user?.subscription?.startedDate).isBefore(
  //       user?.subscription?.endDate
  //     )
  //   ) {
  //     console.log("asdfsdf");
  //     const intervalId = setInterval(() => {
  //       // setStr(`Your ${user?.subscription?.type} is end`);
  //       setPlan(true);
  //     }, 4000);
  //     return () => clearInterval(intervalId);
  //   }
  // }, [user, setPlan]);
  return (
    <div className="bg-[#F8FAFC]  ">
      <Nav />
      <Header user={user} setIsOpen={setIsOpen} />
      <TrailModal
        handleData={handleTrail}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <SubsModal closeModal={closeTrail} isOpen={trailOpen} />
      {/* <EndPlanModal closeModal={closPlan} isOpen={plan} /> */}
      <Rings />
      <ProductivitySection user={user} setIsOpen={setIsOpen} />
      <Feature />
      <Connect />
      <PricingPlan />
      <Faq />
      <NewsLetter user={user} setIsOpen={setIsOpen} />
      <FooterHome />
    </div>
  );
};

export default Homepage;
