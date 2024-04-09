import { FaEnvelopeSquare, FaLock } from "react-icons/fa";
import BG from "../assets/bg-01.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl">
          <form className="py-10 px-16 md:p-20 mb-10">
            <h2 className="text-3xl font-bold text-center text-white mb-7">
              Register
            </h2>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                Name
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaEnvelopeSquare size={20} className="text-white" />
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                Photo URL
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaEnvelopeSquare size={20} className="text-white" />
                <input
                  type="text"
                  placeholder="Type Your Phot URL"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  
                />
              </div>
            </div>


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
              Register
            </button>
          </form>

          <div className="text-center pb-10">
            <div>
              <h2 className="text-xl font-normal text-gray-300 mt-7">
                Already Have An Account?
                <Link to="/login" className="text-white font-extrabold">
                  Login
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
