import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

import logo from "../../assets/logoss.svg";
import bg from "../../assets/bg.png";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
const SignUp = () => {
  const {
    createUser,
    setUser,
    user,
    signInWithGoogle,
    signInWithFacebook,
    updateUserProfile,
    saveUser,
    logOut,
  } = useAuth();
  const [open, setOpen] = useState(false);
  const [sopen, setsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      saveUser(result.user);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithFacebook();
      console.log(result.user);
      saveUser(result.user);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const fullName = e.target.fullName.value;
    const password = e.target.password.value;

    const confirmPassword = e.target.confirmPassword.value;
    const cname = e.target.cname.value;
    const csize = e.target.csize.value;
    const terms = e.target.terms.checked;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password dont match!!!");
      setLoading(false);
      return;
    }
    if (!terms) {
      toast.error("Accept Terms and Condition!!!");
      setLoading(false);
      return;
    }
    try {
      // const image = await GetPhoto(photo);
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(fullName, "");
      // setUser({ ...user, photoURL: image });
      toast.success("Registration Successfull");
      await saveUser({
        email: result?.user?.email,
        displayName: result?.user?.displayName,
        photoURL: result?.user?.photoURL,
        companyName: cname,
        companySize: csize,
      });
      await logOut();
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white relative w-full ">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen w-full   opacity-5 absolute bg-no-repeat bg-cover bg-center  "
      ></div>
      <div className="  relative p-8 mt-8 z-30  ">
        <h2 className="text-2xl mt-12 md:mt-0 md:text-3xl lg:text-4xl font-bold text-center mb-1 text-[#18243E]">
          Welcome to CheckMateGo
        </h2>
        <p className="text-[#18243E] text-center mb-4">
          Join now and start your journey with us{" "}
        </p>
        <form onSubmit={handleSignUp} className="max-w-md  mx-auto">
          {/* Full Name */}
          <div className="mb-4 ">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <input
              type={open ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
            <div
              className=" cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <IoEye size={22} className=" text-slate-700 " />
              ) : (
                <IoEyeOffSharp size={22} className="text-slate-700 " />
              )}
            </div>
          </div>
          <div className="relative mb-4">
            <input
              type={sopen ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
            <div
              className=" cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
              onClick={() => setsOpen(!sopen)}
            >
              {!sopen ? (
                <IoEye size={22} className=" text-slate-700 " />
              ) : (
                <IoEyeOffSharp size={22} className="text-slate-700 " />
              )}
            </div>
          </div>

          <div className=" mb-4">
            <input
              type="text"
              name="cname"
              placeholder="Company Name"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="csize"
              placeholder="Company Size"
              className="w-full z-30  px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
          </div>

          <div className="flex items-center my-4">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              className="h-4 w-4  text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-gray-500">
              I agree{" "}
              <span className="text-[#18243E] text-sm font-semibold">
                terms and conditions
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white font-bold py-2 px-4 rounded-full  bg-green-500 hover:bg-green-600 disabled:bg-green-700"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="max-w-md mt-4 mx-auto">
          <p className="text-center text-slate-600 text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[#18243E] text-base font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
        <div className="mt-4 max-w-md mx-auto flex items-center  justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <p className="text-xs text-gray-700 mx-4">or</p>
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="flex max-w-md mx-auto flex-col gap-3 mt-4">
          <button
            // onClick={handleFacebookSignIn}
            className="flex z-30 gap-2 font-semibold border border-slate-800 items-center justify-center   text-[#18243E] rounded-full  py-1 hover:scale-105 transition-transform duration-300 "
          >
            <img src={fb} className="h-7 w-7" alt="Facebook" />
            Login with Facebook
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="flex z-30 gap-2 font-semibold border border-slate-800 items-center justify-center   text-[#18243E] rounded-full  py-1 hover:scale-105 transition-transform duration-300 "
          >
            <img src={g} className="h-6 w-6" alt="Google" />
            Login with Google
          </button>
        </div>
        <div className=" absolute top-4 md:top-12 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-12 flex justify-center hover:scale-105 transition-all duration-500">
          <Link to={"/"}>
            <img src={logo} className="w-[250px]" alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
