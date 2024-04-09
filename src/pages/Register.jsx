import { FaEnvelopeSquare, FaLock } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import BG from "../assets/bg-01.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {

   const naviGate = useNavigate();
  
   const {
    register,
    handleSubmit,
    resetField,
    // watch,
    formState: { errors },
  } = useForm()

  const { createUser, loggedOutUser } = useContext(AuthContext);

console.log(errors)
 const onSubmit = (data) => {
  // const name = data.Name;
  // const photo = data.Photo;
  // const email = data.Email;
  // const password = data.Password;

  const {Name, Photo, Email, Password} = data;

  resetField("Name")
  resetField("Photo");
  resetField("Email");
  resetField("Password");
  // Create a New User 
  createUser(Email, Password)
  .then(result => {
    updateProfile(result.user, {
      displayName: Name,
      photoURL: Photo
    })
    //  console.log(result.user)
    toast.success("Successfully Created Account!");
     naviGate('/login')
     loggedOutUser();
    })
    .catch(error => console.log(error.message))
 };
  
  return (
    <div>
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-10 px-16 md:p-20 mb-10"
          >
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
                  {...register("Name")}
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
                  {...register("Photo")}
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
                  {...register("Password", {
                    minLength: {
                      value: 6,
                      message:
                        "Password Should Be At Least 6 Character or Above",
                    },
                  })}
                  placeholder="Type Your Password"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  required
                />
              </div>
              <div>
                {errors.Password && (
                  <p className="text-base text-red-600 font-semibold">
                    {errors.Password.message}
                  </p>
                )}
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
