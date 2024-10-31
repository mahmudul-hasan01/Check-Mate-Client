import i1 from "../../assets/connect/icon1.png";
import i2 from "../../assets/connect/icon2.png";
import i3 from "../../assets/connect/icon5.png";
import i4 from "../../assets/connect/icon4.png";
import img1 from "../../assets/connect/Rectangle 13.png";
import img2 from "../../assets/connect/Rectangle 14.png";
import img3 from "../../assets/connect/Rectangle 15.png";
import img4 from "../../assets/connect/Rectangle 16.png";
import img5 from "../../assets/connect/l.jpg";
import img6 from "../../assets/connect/Rectangle 18.png";
import bar from "../../assets/connect/bar.png";

import { MdArrowOutward } from "react-icons/md";

const Connect = () => {
  
  return (
    <div className="relative mt-8 mb-20">
      <div className="container relative z-20  mx-auto px-1 md:px-3 lg:px-6 ">
        <h2 className="text-3xl mb-5  md:text-4xl lg:text-5xl text-[#0F172A] font-bold text-center">
          Connect With us
        </h2>
        <p className="w-full md:w-[450px] text-[#000000] mx-auto text-center mt-1 mb-5">
          Stay connected and engage with us on social media! Follow us for the
          latest updates, tips, and community interactions.
        </p>
        <div className=" flex  justify-center items-center gap-4">
          <img className="h-[40px] " src={i1} alt="" />
          <img className="h-[40px] " src={i2} alt="" />
          <img className="h-[40px] " src={i3} alt="" />
          <img className="h-[40px] " src={i4} alt="" />
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img
              src={img1}
              className=" h-[300px] md:h-[360px] hover:scale-95 transition-transform duration-700 object-fill   w-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={img2}
              className=" h-[300px] md:h-[360px] hover:scale-95 transition-transform duration-700 object-fill   w-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={img3}
              className=" h-[300px] md:h-[360px] hover:scale-95 transition-transform duration-700 object-fill   w-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={img4}
              className=" h-[300px] md:h-[360px] hover:scale-95 transition-transform duration-700 object-fill   w-full"
              alt=""
            />
          </div>
          <div className="z-10 hover:scale-95 transition-transform duration-700 relative">
            <img
              src={img5}
              className=" h-[300px] md:h-[360px]  object-fill   w-full"
              alt=""
            />
            <div className="absolute  h-[200px] bottom-0 left-0   w-full bg-gradient-to-t from-green-500 to-transparent opacity-70   rounded-b-3xl"></div>

            <div className=" flex justify-between gap-8 px-4 py-3 items-center absolute bottom-4">
             
                <p className="text-white  text-2xl">
                  How to Host a Meeting on Checkmate Go
                </p>
              

              <div className=" text-white text-2xl">
                <MdArrowOutward className=" text-white" size={32} />
              </div>
            </div>
          </div>
          <div>
            <img
              src={img6}
              className=" h-[300px] md:h-[360px] hover:scale-95 transition-transform duration-700 object-fill   w-full"
              alt=""
            />
          </div>

          {/* <img
            src={img2}
            className="h-[300px] sm:h-[350px] hover:scale-95 transition-transform duration-700 object-fill  md:h-full w-full"
            alt=""
          />
          <img
            src={img3}
            className="h-[300px] sm:h-[350px] hover:scale-95 transition-transform duration-700 object-fill  md:h-full w-full"
            alt=""
          />
          <img
            src={img4}
            className="h-[300px] hover:scale-95 transition-transform duration-700 sm:h-[350px] object-fill md:h-full w-full"
            alt=""
          />
          <img
            src={img5}
            className="h-[300px] sm:h-[350px] hover:scale-95 transition-transform duration-700 object-fill md:h-[407px] w-full"
            alt=""
          />
          <img
            src={img6}
            className="h-[300px] sm:h-[350px] hover:scale-95 transition-transform duration-700 object-fill md:h-full w-full"
            alt=""
          /> */}
        </div>
      </div>
      <img
        src={bar}
        className=" hidden md:inline-block h-[300px] md:h-[400px]  absolute right-0 -bottom-24"
        alt=""
      />
    </div>
  );
};

export default Connect;
