import { Link, useLocation, useNavigate } from "react-router-dom";
import fb from "../../assets/images/fb.png";
import g from "../../assets/images/g.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import bg from "../../assets/bg.png";
import logo from "../../assets/logoss.svg";

const Login = () => {
  const { signIn, signInWithGoogle, saveUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state ? location?.state : "/";
  const [isOpen, setIsOpen] = useState(false);
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      saveUser(result.user);
      navigate(path);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(location);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      const result = await signIn(email, password);
      console.log(result);
      navigate(path);
    } catch (error) {
      console.log(error?.message);
      if(error?.message.includes('auth/invalid-credential')){
        console.log('Hello')
        toast.error('Password Or Email Incorrect');
      }
      else{
        toast.error(error?.message)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative w-full flex justify-center items-center">
      <div className="bg-white z-30  p-8 mx-auto mt-12 rounded-lg  max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
          Login
        </h2>
        <p className="text-slate-800 text-center mb-8">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />
          </div>
          <div className=" relative ">
            <input
              type={isOpen ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-transparent text-gray-900"
            />

            {isOpen ? (
              <IoEyeOffSharp
                onClick={() => setIsOpen(!isOpen)}
                size={20}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <IoEye
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                size={20}
              />
            )}
          </div>
          <div className="mb-6 mt-1 pl-2">
            <Link
              to={"/reset"}
              // onClick={handleFormgetPassword}
              className="text-xs text-blue-500 hover:underline"
            >
              Forgotten password?
              <span className="font-bold ml-1 text-sm text-slate-800">
                Reset
              </span>
            </Link>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-white font-bold py-2 px-4 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-green-700"
          >
            {loading ? (
              <ImSpinner9 size={24} className=" animate-spin m-auto" />
            ) : (
              "Log In"
            )}
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm">
            Don&apos;t have account?{" "}
            <Link
              to={"/signup"}
              className="text-slate-900  font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="mt-4 flex items-center  justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <p className="text-xs text-gray-400 mx-4">or</p>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="flex gap-2 font-semibold border border-green-500 items-center justify-center   text-slate-800 rounded-full  py-1 hover:scale-105 transition-transform duration-500 ">
            <img src={fb} className="h-7 w-7" alt="Facebook" />
            Login with Facebook
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="flex gap-3 font-semibold border border-green-500 items-center justify-center   text-slate-800 rounded-full  py-1 hover:scale-105  transition-transform duration-500"
          >
            <img src={g} className="h-6 w-6" alt="Google" />
            Login with Google
          </button>
        </div>
        <div className=" absolute top-10 md:top-12 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-12 flex justify-center hover:scale-105 transition-all duration-500">
          <Link to={"/"}>
            <img src={logo} className="w-[250px]" alt="Logo" />
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen opacity-5 bg-no-repeat bg-cover bg-center w-full absolute"
      ></div>
    </div>
  );
};

export default Login;
