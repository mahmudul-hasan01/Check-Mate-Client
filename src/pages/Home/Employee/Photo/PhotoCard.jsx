import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../../../../assets/1.jpeg";

const PhotoCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const date = new Date(item[0]);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);


  return (
    <div>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost btn-circle"
        >
          {isOpen ? (
            <FaAngleDown className="cursor-pointer" size={24} />
          ) : (
            <FaChevronUp className="cursor-pointer" size={24} />
          )}
        </button>
        <h1 className="text-xl font-medium text-[#10172A]">{formattedDate}</h1>
        <hr className="border flex-1 border-green-500" />
      </div>
      {isOpen && (
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
          {item[1]?.map((data) => (
            <div
              key={data}
              className="overflow-hidden hover:shadow-xl rounded-md bg-white text-slate-500 shadow-md shadow-slate-200"
            >
              {/*  <!--  Image --> */}
              <figure>
                <img
                  src={data?.photo}
                  alt="card image"
                  className="aspect-video w-full"
                />
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-4">
                <header className="">
                  <h3 className="text-lg font-medium text-[#10172A]">
                    Comments{" "}
                  </h3>
                  <p className=" text-[#18243E]"> Profesional and Effieient</p>
                </header>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
