import { FaEnvelopeSquare, FaGithub, FaGoogle, FaLock } from "react-icons/fa";
import BG from "../assets/bg-01.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom">
          <form className="py-10 px-5 md:p-20 border-b mb-10">
            <h2 className="text-3xl font-bold text-white mb-7">
              
            </h2>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                E-Mail
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaEnvelopeSquare size={20} className="text-white" />
                <input
                  type="email"
                  placeholder="Type Your Email"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold text-gray-300">
                Password
              </label>
              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaLock size={20} className="text-white" />
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  required
                />
              </div>
            </div>

            <button className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full">
              Login
            </button>
          </form>

          <div className="text-center pb-10">
            <h2 className="text-2xl font-bold text-white mb-7">
              Or Sign In Using
            </h2>

            <div className="flex gap-x-5 justify-center">
              <button className="p-3 bg-red-500 text-white rounded-full">
                <FaGoogle size={24} />
              </button>
              <button className="p-3 bg-black text-white rounded-full">
                <FaGithub size={24} />
              </button>
            </div>

            <div>
              <h2 className="text-xl font-normal text-gray-300 mt-7">
                Don&apos;t Have An Account?{" "}
                <Link to="/register" className="text-white font-extrabold">
                  Register
                </Link>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
