const StatsCard = ({ title, count, icon: Icon, img }) => {
  return (
    <div className=" shadow-xl text-white rounded-3xl flex flex-col  justify-center gap-1">
      <div className=" flex justify-center rounded-t-2xl bg-[#79DA9D] ">
        {/* <Icon className="md:h-16 h-12 w-12 md:w-16" /> */}
        <img src={img} className="min-w-[114px] min-h-[135px]" />
      </div>
      <div className=" p-4">
      <p className="text-3xl text-green-500  font-medium ">
        {title === "Total Amounts" ? `$ ${count}` : count}
      </p>
      <h4 className="text-lg text-black">{title}</h4>
      </div>
    </div>
  );
};

export default StatsCard;
