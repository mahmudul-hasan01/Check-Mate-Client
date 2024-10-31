

// import back from "../../assets/bgl.jpg";
// import back from "../../assets/bg2.svg";
// import back from "../../assets/bg3.jpg";
import back from "/rec5.svg";


import fog from "../../assets/fog.svg";
import fog2 from "../../assets/fog2.svg";
import das from "../../assets/hero.png";
// import das from "../../assets/das2.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import PropTypes from 'prop-types'
import lin from "../../assets/lin.svg";
import { useNavigate } from "react-router-dom";
const Header = ({ setIsOpen, user = {} }) => {
  const navigate = useNavigate();
  const handleTrail = () => {
    if (!user?.email) {
      navigate('/login')
      return;
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
      }}
      className="bg-no-repeat relative pt-36 lg:pt-[200px]  bg-center bg-cover w-full border-b-0  min-h-[660px] md:h-[760px] px-4 md:px-7 lg:px-0 lg:h-[1120px] mb-24"
    >
      <div className=" relative z-20  space-y-5 lg:space-y-8  ">
        <h2 className="text-3xl relative z-30 lg:w-7/12   md:text-4xl lg:text-6xl   leading-[45px] md:leading-[50px] lg:leading-[75px]   text-white  mx-auto text-center font-medium">
          <span className=" relative">
          Capture
          <img src={lin} alt="Line" className="w-7 md:w-9 lg:w-12 absolute -top-5 -left-7 md:-left-8 lg:-left-8 lg:-top-8 rotate-12 " />
            </span> job site photos, share updates, and stay in control 
          <div className=" ml-3 relative  inline-block ">
            <span className=" relative z-20">CheckMateGo.</span>
            <span className=" absolute w-[200px] md:w-[240px] lg:w-[400px] h-[10px] lg:h-[19px] bottom-[12px] md:bottom-3 lg:bottom-[16px] z-10 left-0 bg-green-500"></span>
          </div>
          
        </h2>
        <p className=" text-[#ffffff] my-[200px] text-sm lg:text-xl text-center">
          Every Photo, Video, Chat and Project in one App.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleTrail}
            className="px-10 mx-auto flex items-center gap-1 uppercase py-3  text-sm lg:text-lg font-medium bg-[#22C55E] text-white rounded-lg"
          >
            Get Started for Free <MdOutlineArrowOutward size={24} />
          </button>
        </div>
       
      </div>
      <img className="absolute -top-28  lg:top-0 right-0 h-[299px] md:h-[400px]" src={fog} alt="cloud" />
      <img
        className="absolute bottom-12 -left-24 lg:left-0 h-[400px] rounded-b-[80px]"
        src={fog2}
        alt="cloud"
      />
      <img
        className=" w-auto md:w-[620px]  lg:w-auto  object-cover absolute left-1/2 -translate-x-1/2 -bottom-28 md:-bottom-32 lg:bottom-[-370px]"
        src={das}
        alt=""
      />
      
    </div>
  );
};

Header.propTypes = {
  setIsOpen: PropTypes.func,
  user: PropTypes.object,
}

export default Header;
