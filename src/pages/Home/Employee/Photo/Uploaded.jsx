import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PhotoCard from "./PhotoCard";
import { Link } from "react-router-dom";
const Uploaded = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: uploadTask,
    isLoading,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employee-task/${user?.email}`);
       
      return data.filter((item) => item?.Status === "Completed");
    },
  });
  // console.log(uploadTask)

  const groupImagesByDate = (images) => {
    if (!images || images.length === 0) {
      return {}; 
    }

    return images.reduce((groups, image) => {
      const completedTime = image?.completedTime;

      // Check if the completedTime is valid
      if (completedTime) {
        const date = new Date(completedTime);

        // Ensure the date is valid
        if (!isNaN(date)) {
          const formattedDate = date.toISOString().split("T")[0]; // Format to 'YYYY-MM-DD'

          if (!groups[formattedDate]) {
            groups[formattedDate] = [];
          }
          groups[formattedDate].push(image);
        }
      }

      return groups;
    }, {});
  };

  const array = Object.entries(groupImagesByDate(uploadTask));

    console.log(array);
  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading....</p>
      </div>
    );
  return (
    <div className="p-8 space-y-5 ">
      {array && array?.length === 0 && (
        <div className="">
          <h2 className=" text-2xl mb-6 font-medium">
            You Dont Upload any Photo
          </h2>
          <Link
            className="bg-green-500 mx-auto mt-8 text-white px-6 py-2 rounded-sm font-medium"
            to={"/dashboard/task"}
          >
            Go to task page
          </Link>
        </div>
      )}
      {array?.map((item, index) => (
        <PhotoCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Uploaded;
