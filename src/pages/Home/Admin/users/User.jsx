import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Title from "../../Common/Title";
import UserTable from "./UserTable";
import { useQuery } from "@tanstack/react-query";
import Create from "./Create";
import InviteMembers from "./InviteMembers";


const User = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: totalUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-user");
      // console.log(data);
      return data;
    },
  });
  // console.log(
  //   totalUsers?.filter((item) => item?.subscription?.type === "Getting Started")
  // );
  console.log(
    totalUsers?.filter(
      (item) =>
        item?.subscription?.type === "Getting Started" ||
        item?.subscription?.type === "Trail"
    )
  );
  console.log(
    totalUsers?.filter((item) => item?.subscription?.type === "Home Program")
  );
  if (isLoading)
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <AiOutlineLoading3Quarters
          size={50}
          className="animate-spin text-black m-auto"
        />
      </div>
    );


  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-end gap-5">
        {/* + Create */}
        <Create />
        {/* <button className="bg-[#18243E] flex items-center gap-1 rounded-full text-white py-1 px-5  hover:bg-[#18243E]">+ Create</button> */}

        {/* + Invite Members */}
        <InviteMembers />
       
      </div>
      <Title title={"List of Users"} />
      <div className="space-y-12">
        <UserTable
          refetch={refetch}
          users={totalUsers?.filter(
            (item) =>
              item?.subscription?.type === "Getting Started" ||
              item?.subscription?.type === "Trail"
          )}
          title={"Getting Started"}
        />

        <UserTable refetch={refetch} users={totalUsers} title={"Scaling Up"} />
        <UserTable
          refetch={refetch}
          users={totalUsers?.filter(
            (item) => item?.subscription?.type === "Home Program"
          )}
          title={"Home Program"}
        />
      </div>
    </div>
  );
};

export default User;
