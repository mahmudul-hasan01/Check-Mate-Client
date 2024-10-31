import { useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import CameraCapture from "../Photo/CameraCapture";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
// import DirectionMap from "../Map/DirectionMap";

// const getGeocode = async (address) => {
//   try {
//     const response = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//         address
//       )}`
//     );
//     const data = await response.json();
//     console.log(data);
//     if (data && data.length > 0) {
//       return {
//         lat: parseFloat(data[0].lat),
//         lon: parseFloat(data[0].lon),
//       };
//     }
//     throw new Error("Location not found");
//   } catch (error) {
//     console.error("Error during geocoding:", error);
//     return null;
//   }
// };

const ProgressCard = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  // const [destination, setDestination] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleComplete = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (!imageUrl) {
      toast.error("Take a Photo First!!!");
      return;
    }
    const details = {
      name: item?.Employee,
      assignedBy: item?.assignedBy?.name,
      comment,
      imageUrl,
    };
    try {
      const { data } = await axiosSecure.patch(`/tasks/${item?._id}`, details);
      if (data?.result?.modifiedCount) {
        refetch();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  // For Text to Lat lon
  // const fun = async () => {
  //   const location = await getGeocode("Kalihati Tangail");
  //   console.log(location);
  //   if (location) {
  //     setDestination(location);
  //   }
  // };
  // fun();
  return (
    <div className="bg-[#f9f9f9] w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[text-[#18243E]]">
            {item?.task_Name}
          </h2>
          <p className="text-sm font-medium text-[#18243E]">{item?.time}</p>
        </div>
        <p className="text-sm  text-justify text-gray-600 my-[6px]">
          {item?.Details}
        </p>
        <iframe
          title="Google Map"
          className="w-1/2 h-14 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.96305771550433!3d-37.81627944252165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777d5e5a94b23d!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1613963630043!5m2!1sen!2sau"
        ></iframe>
        {/* <div className="h-[200px]">
          <DirectionMap address={destination} />
        </div> */}
        <div className="flex justify-between items-center mt-2">
          <MdOutlinePhotoCamera
            onClick={() => setIsOpen(!isOpen)}
            size={22}
            className=" text-[#18243E] cursor-pointer"
          />
          <p className="text-sm text-red-600 font-semibold">Due Sep 12</p>
        </div>
        {isOpen && <CameraCapture setImageUrl={setImageUrl} />}
        <h2 className=" font-semibold text-[#18243E]">Comments : </h2>

        <form onSubmit={handleComplete} className="flex justify-end">
          <input
            type="text"
            className="border-0 bg-[#f9f9f9] border-b px-2 py-1 w-full"
            name="comment"
            id=""
            required
            placeholder="Type here"
          />
          <button type="submit" className="bg-green-500  text-white py-[6px] px-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
ProgressCard.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func,
};
export default ProgressCard;
