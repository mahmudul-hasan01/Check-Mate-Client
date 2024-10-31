import RingCard from "./RingCard";
import v1 from "../../assets/ring/v1.svg";
import v2 from "../../assets/ring/v3.png";
import vector from "../../assets/VECTOR3.svg";
const Rings = () => {
  return (
    <div className="mt-28 lg:mt-[450px] relative">
      <div className="  relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 md:gap-6  lg:mx-[90px]">
        <RingCard
          num={1}
          title={"Free Trial"}
          desc={
            "Sign up for CheckMateGo and begin your 7-day trial today, giving you full access to all of our features!"
          }
        />
        <img
          src={v1}
          className="w-[150px] -rotate-90 lg:rotate-0 inline-block md:hidden xl:inline-block absolute left-1/2 -translate-x-1/2 lg:left-[330px] lg:-translate-x-0 top-[315px] lg:top-12 "
          alt=""
        />
        <RingCard
          num={2}
          title={"Take Photos"}
          desc={
            "Launch a new project, bring your team on board, and begin uploading your photos. Feel free to capture everything you need—theres no limit on storage!"
          }
        />
        <img
          src={v2}
          className="w-[150px] -rotate-90 inline-block md:hidden  xl:rotate-0 xl:inline-block absolute left-1/2 xl:left-[68%] -translate-x-1/2   top-[69%] xl:top-12"
          alt=""
        />
        <RingCard
          num={3}
          title={"Live Project Updates"}
          desc={
            "Your Operations Manager can access a live feed of photos uploaded from all projects, including those from other teams"
          }
        />
      </div>
      <img
        src={vector}
        className="absolute -top-40 left-0 hidden xl:inline-block"
      />
    </div>
  );
};

export default Rings;
