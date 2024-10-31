import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import BarChartGraph from "./BarChart";
import { LuPlus } from "react-icons/lu";
import PackageMOdal from "../../Modals/PackageModal";
import AllSubs from "./AllSubs";

import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

const Subscriptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    data: subscriptions = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/subscription-data");
      console.log(data);
      return data;
    },
  });
  const [isChange, setIsChange] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleData = async (e) => {
    e.preventDefault();
    const name = e.target.pname.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const detailsList = e.target.details.value;
    const details = detailsList.split("\n");
    console.log(name, price, duration, details);
    const packageDetails = {
      name,
      price,
      duration,
      details,
    };
    try {
      const { data } = await axiosSecure.post("/packages", packageDetails);
      console.log(data);
      if (data.insertedId) {
        toast.success("Package Added!!!");
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsOpen(false);
    }
  };

  // const packages = [
  //   {
  //     name: "Total",
  //     count: subscriptions?.totalSubscribers?.length,
  //     amount: subscriptions?.totalSubscribers?.reduce(
  //       (sum, item) => sum + parseFloat(item?.subscriptionDetails?.price),
  //       0
  //     ),
  //   },
  //   {
  //     name: "Getting Started",
  //     count: subscriptions?.totalSubscribers?.filter(
  //       (item) => item?.subscriptionDetails?.name === "Getting Started"
  //     )?.length,
  //     amount: subscriptions?.totalSubscribers
  //       ?.filter(
  //         (item) => item?.subscriptionDetails?.name === "Getting Started"
  //       )
  //       ?.reduce(
  //         (sum, item) => sum + parseFloat(item?.subscriptionDetails?.price),
  //         0
  //       ),
  //   },
  // ];
  const totalCount = subscriptions?.totalSubscribers?.length;
  const totalGetCount = subscriptions?.totalSubscribers?.filter(
    (item) => item?.subscriptionDetails?.plan === "Getting Started"
  )?.length;
  const totalScalCount = subscriptions?.totalSubscribers?.filter(
    (item) => item?.subscriptionDetails?.plan === "Scaling Up"
  )?.length;
  const totalHomeCount = subscriptions?.totalSubscribers?.filter(
    (item) => item?.subscriptionDetails?.plan === "Home Program"
  )?.length;

  console.log(totalGetCount, totalScalCount);
  const totalAmount = subscriptions?.totalSubscribers?.reduce(
    (sum, item) => sum + parseInt(item?.subscriptionDetails?.price),
    0
  );
  const totlaGetAmount = subscriptions?.totalSubscribers
    ?.filter((item) => item?.subscriptionDetails?.plan === "Getting Started")
    ?.reduce(
      (sum, item) => sum + parseInt(item?.subscriptionDetails?.price),
      0
    );
  console.log(totlaGetAmount);
  const totlaScalAmount = subscriptions?.totalSubscribers
    ?.filter((item) => item?.subscriptionDetails?.plan === "Scaling Up")
    ?.reduce(
      (sum, item) => sum + parseInt(item?.subscriptionDetails?.price),
      0
    );
  console.log(totlaGetAmount);
  const totlaHomeAmount = subscriptions?.totalSubscribers
    ?.filter((item) => item?.subscriptionDetails?.plan === "Home Program")
    ?.reduce(
      (sum, item) => sum + parseInt(item?.subscriptionDetails?.price),
      0
    );
  console.log(totlaGetAmount);
  const [itemPerPage, setItemPerPage] = useState(3);
  const totalItem = subscriptions?.totalSubscribers?.length;
  const [start, setStart] = useState(1);
  const totalPage = Math.ceil(totalItem / itemPerPage);

  const startData = (start - 1) * itemPerPage;
  const endData = start * itemPerPage;
  const newData = subscriptions?.totalSubscribers?.slice(startData, endData);

  if (isLoading)
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <p>Loading ....</p>
      </div>
    );
  return (
    <div className="max-w-6xl bg-white mx-auto p-6">
      <div className="flex gap-2 justify-end items-center mb-6">
        <button
          onClick={() => setIsChange(!isChange)}
          className="text-green-500 border-green-500  text-lg border bg-[#f9f9f9] py-[6px] px-4 rounded-full hover:text-green-600"
        >
          {!isChange ? "All Packages" : "Overview"}
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-800 flex gap-1 items-center text-lg  text-white py-[6px] px-4 rounded-full hover:bg-slate-700"
        >
          <LuPlus size={24} /> Create New Package
        </button>
        <PackageMOdal
          length={subscriptions?.totalPackages?.length}
          handleData={handleData}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
      {!isChange && (
        <div className={``}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            <Card count={totalCount} amount={totalAmount} name={"Total"} />
            <Card
              count={totalGetCount}
              amount={totlaGetAmount}
              name={"Getting Started"}
            />
            <Card
              count={totalScalCount}
              amount={totlaScalAmount}
              name={"Scaling Up"}
            />
            <Card
              count={totalHomeCount}
              amount={totlaHomeAmount}
              name={"Home Program"}
            />
          </div>

          {/* Total Subscriptions Chart */}
          <div className="bg-white p-6 hidden lg:block rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Total Subscriptions</h2>
              <select className="border border-green-500 rounded-full p-2">
                <option>Yearly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="min-h-[300px] ">
              <BarChartGraph />
            </div>
          </div>

          {/* Subscribers Table */}
          <div className="bg-white lg:p-6 rounded-lg ">
            <div className="flex justify-between gap-1 items-center">
              <h3 className=" text-sm lg:text-md font-semibold   cursor-pointer text-slate-900  rounded-lg mb-2 inline-block">
                Total Subscribers
              </h3>

              {/* Search and Date Picker */}
              <div className="flex items-center justify-end gap-2 lg:gap-4 mb-4">
                <div>
                  <button className="flex bg-green-500 text-white py-1 px-5 rounded-full items-center gap-1 text-lg">
                    <IoSearchSharp size={22} />
                    Search
                  </button>
                </div>
                <div>
                  <select className="py-2 px-4 border bg-white text-green-500 font-medium border-green-500 rounded-lg">
                    <option>August 2024</option>
                    <option>September 2024</option>
                    <option>October 2024</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
              <table className="min-w-full table-auto rounded-lg">
                <thead className=" text-white">
                  <tr className="bg-green-500">
                    <th className="whitespace-nowrap px-1 border-r py-2">Sl</th>
                    <th className="whitespace-nowrap px-1 border-r py-2">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-1 border-r py-2">
                      Email
                    </th>
                    <th className="whitespace-nowrap px-1 border-r py-2">
                      Company Details
                    </th>
                    <th className="whitespace-nowrap px-1 border-r py-2">
                      Subscription Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newData?.map((user, index) => (
                    <tr key={user.id} className="text-center border-t">
                      <td className="px-2 whitespace-nowrap  border-r text-slate-800 bg-[#f9f9f9] py-2">
                        {index + 1}
                      </td>
                      <td className="px-2 whitespace-nowrap  border-r text-slate-800 bg-[#f9f9f9] py-2">
                        {user.name}
                      </td>
                      <td className="px-2 whitespace-nowrap  border-r text-slate-800 bg-[#f9f9f9] py-2">
                        {user.email}
                      </td>
                      <td className="px-2 whitespace-nowrap  border-r text-slate-800 bg-[#f9f9f9] py-2">
                        {user?.companyDetails?.companyName} <br />{" "}
                        <span className="text-slate-500 text-sm mt-0">
                          {user?.companyDetails?.employees} employees
                        </span>
                      </td>
                      <td className="  border-r text-slate-800 bg-[#f9f9f9] py-2">
                        {user?.subscriptionDetails?.plan} <br />{" "}
                        <span className="text-slate-500 text-sm mt-0">
                          ${user?.subscriptionDetails?.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-green-500 py-[2px] w-full flex justify-end gap-8 pr-8">
                <div className="px-4 py-1 flex items-center text-right font-normal text-sm text-white">
                  <h3>Item per Page</h3>
                  <select
                    onChange={(e) => {
                      setStart(1);
                      setItemPerPage(e.target.value);
                    }}
                    className=" ml-1 bg-green-500 text-white"
                  >
                    <option className="bg-white text-black" value="3">
                      3
                    </option>
                    <option className="bg-white text-black" value="5">
                      5
                    </option>
                    <option className="bg-white text-black" value="10">
                      10
                    </option>
                  </select>
                </div>
                <div className="flex gap-1 items-center">
                  <button
                    disabled={start === 1}
                    onClick={() => setStart(start - 1)}
                    className=" flex items-center cursor-pointer  font-normal text-right text-white"
                  >
                    <TbPlayerTrackPrevFilled className="" />
                    <GrCaretPrevious className="" />
                  </button>
                  <button
                    disabled={start === totalPage}
                    onClick={() => setStart(start + 1)}
                    className=" flex items-center  font-normal text-right text-white"
                  >
                    <GrCaretNext className="inline-block" />
                    <TbPlayerTrackNextFilled className="inline-block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isChange && (
        <AllSubs refetch={refetch} packages={subscriptions?.totalPackages} />
      )}
    </div>
  );
};

export default Subscriptions;
