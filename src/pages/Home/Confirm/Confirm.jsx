import { Link, useNavigate, useSearchParams } from "react-router-dom";

import bg from "../../../assets/bg.png";
import email from "../../../assets/email.png";
const Confirm = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const emailto = params.get("email");
  return (
    <div className="flex bg-white justify-center min-h-screen items-center">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen absolute bg-center bg-cover bg-no-repeat   w-full opacity-5 "
      ></div>
      <div className=" max-w-lg z-30">
        <h2 className="text-3xl md:text-4xl text-slate-800 font-bold text-center">
          Check Your Email{" "}
        </h2>
        <p className="  font-medium w-11/12 text-slate-800 mx-auto text-center mt-6 mb-3">
          We have send a password recover
        </p>
        {/* <HiOutlineMailOpen className="mx-auto mb-8" size={100} /> */}
        <img className="w-16 h-16 mx-auto mb-8" src={email} alt="" />
        <a href={`mailto:${emailto}`}>
          <button
            disabled={!email}
            className="w-full disabled:from-green-900 disabled:to-green-950 text-white text-lg font-bold py-[7px] px-4 rounded-full bg-green-500 hover:bg-green-600"
          >
            Open Gmail
          </button>
        </a>

        <div className="flex mt-6 justify-between items-center">
          <Link to={"/login"} className="text-slate-800 cursor-pointer font-medium">
            Skip
          </Link>
          <Link to={"/reset"} className="text-slate-800 cursor-pointer font-medium">
            Try another email
          </Link>
        </div>
      </div>
      <h2
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer absolute top-4 lg:top-16 left-4 lg:left-16 font-medium text-slate-800"
      >
        Back
      </h2>
    </div>
  );
};

export default Confirm;
