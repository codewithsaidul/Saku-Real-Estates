import { FaEnvelopeSquare, FaGithub, FaGoogle, FaLock } from 'react-icons/fa';
import BG from '../assets/bg-01.jpg'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from "react-hot-toast";

const Login = () => {
  const {register, handleSubmit, resetField} = useForm();
  const {loginUser} = useContext(AuthContext);
  const naviGate = useNavigate();

  const onSubmit = data => {
    const {Email, Password} = data;
    // console.log(Email, Password)
      resetField("Email");
      resetField("Password");

      
    loginUser(Email, Password)
      .then(() => {
        toast.success("Successfully toasted!")
        naviGate('/')
      })
      .catch((error) => console.error(error.message));
  }


  return (
    <div>
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-10 px-5 md:p-20 border-b mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-7">
              Login In Your Account
            </h2>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                E-Mail
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaEnvelopeSquare size={20} className="text-white" />
                <input
                  type="email"
                  {...register("Email")}
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
                  {...register("Password")}
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
}

export default Login