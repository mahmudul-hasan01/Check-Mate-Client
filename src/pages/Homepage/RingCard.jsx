import ri from "../../assets/ring/ri.png";
import PropTypes from "prop-types";

const RingCard = ({ num, title, desc }) => {
  return (
    <div className="min-w-[350px]  p-5">
      <div className="relative w-[114px] mx-auto">
        <img src={ri} alt="" className="h-[114px] w-full" />
        <h1 className="text-3xl lg:text-4xl text-[#0F172A] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute font-medium">
          {num}
        </h1>
      </div>
      <h1 className=" text-2xl lg:text-3xl text-center text-[#0F172A] font-bold  mb-2">{title}</h1>
      <p className="text-[#535454] text-base lg:text-lg   text-center ">{desc}</p>
    </div>
  );
};
RingCard.propTypes  = {
  num: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
}
export default RingCard;
