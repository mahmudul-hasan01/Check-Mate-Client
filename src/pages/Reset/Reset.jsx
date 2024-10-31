import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import bg from "../../assets/bg.png";
const Reset = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleFormgetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, email);

      navigate(`/confirm?email=${email}`);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="flex bg-white relative min-h-screen justify-center items-center w-full">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen  absolute w-full bg-center bg-no-repeat bg-cover  opacity-5  "
      ></div>
      <div className=" max-w-lg z-30">
        <h2 className="text-3xl md:text-4xl text-slate-800 font-bold text-center">
          Need to Reset Your Password?
        </h2>
        <p className=" w-11/12 text-slate-800 mx-auto text-center mt-6 mb-10">
          Enter the email associated with your account and we will send an email
          with instructions to reset your password
        </p>
        <form onSubmit={handleFormgetPassword} className="px-16 space-y-4">
          <input
            required
            name="email"
            className="w-full px-5 py-2 border rounded-full border-green-500 focus:outline-green-600 bg-slate-50 text-gray-900"
            type="email"
            placeholder="send@gmail.com"
          />
          <input
            className="w-full disabled:from-green-900 disabled:to-green-950 text-white text-lg font-bold py-[7px] px-4 rounded-full bg-green-500 hover:bg-green-600"
            type="submit"
            value={"Send Instructions"}
          />
        </form>
      </div>
      <h2
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer absolute top-4 left-4 lg:top-16 lg:left-16 font-medium text-[#18243E]"
      >
        Back
      </h2>
    </div>
  );
};

export default Reset;
