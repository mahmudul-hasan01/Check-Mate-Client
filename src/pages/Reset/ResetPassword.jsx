import { Link, useNavigate, useSearchParams } from "react-router-dom";
import bg from "../../assets/bg.png";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { confirmPasswordReset, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ResetPassword = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get("oobCode");
  const [pass, setPass] = useState(false);
  const [cpass, setCPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    const password = e.target.password.value;
    const confirmPassword = e.target.cpassword.value;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password doesnt match");
      setLoading(false);
      return;
    }
    try {
      await confirmPasswordReset(auth, code, password);
      toast.success("Password Changed Successfully!!!");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen absolute bg-center bg-cover bg-no-repeat   w-full opacity-5 "
      ></div>
      <div className=" max-w-lg z-30">
        <h2 className="text-3xl md:text-4xl text-[#3A6645] font-bold text-center">
          Create New Password
        </h2>
        <p className="  text-[#6D9978] mx-auto text-center mt-6 mb-10">
          Your new password must be different from previous used password.
        </p>
        <form onSubmit={handleReset} className="px-16 space-y-4">
          <div className=" relative">
            <input
              type={pass ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />

            {pass ? (
              <IoEyeOffSharp
                onClick={() => setPass(!pass)}
                size={20}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEye
                onClick={() => setPass(!pass)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                size={20}
              />
            )}
          </div>
          <div className=" relative">
            <input
              type={cpass ? "text" : "password"}
              name="cpassword"
              required
              placeholder="Password"
              className="w-full px-5 py-2 border rounded-full border-slate-200 focus:outline-green-800 bg-slate-50 text-gray-900"
            />

            {cpass ? (
              <IoEyeOffSharp
                onClick={() => setCPass(!cpass)}
                size={20}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEye
                onClick={() => setCPass(!cpass)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                size={20}
              />
            )}
          </div>

          <button className="w-full disabled:from-green-900 disabled:to-green-950 text-white text-lg font-bold py-[7px] px-4 rounded-full bg-gradient-to-r from-[#4f7c5b] to-[#2e4f37] hover:from-green-800 hover:to-green-900">
            {loading ? (
              <AiOutlineLoading3Quarters
                size={24}
                className=" animate-spin m-auto"
              />
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
      <h2
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer absolute top-16 left-16 font-medium text-[#24402B]"
      >
        Back
      </h2>
    </div>
  );
};

export default ResetPassword;
