
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import BG from "../assets/bg-01.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaImage, FaUser } from "react-icons/fa";
import { CiLock, CiMail, CiUnlock } from "react-icons/ci";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

   const naviGate = useNavigate();
  
   const {
    register,
    handleSubmit,
    resetField,
    // watch,
    formState: { errors },
  } = useForm()

  const { user, setUser,  createUser, loggedOutUser } = useContext(AuthContext);

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
    .then((result) => {
      updateProfile(result.user, {
        displayName: Name,
        photoURL: Photo,
      })
      setUser({ ...user, isplayName: Name, photoURL: Photo, });
      toast.success("Successfully Created Account!");
      naviGate("/login");
      loggedOutUser();
    })
    .catch(() => toast.error("E-Mail Already In Used."));
 };
  
  return (
    <div>
      <div
        className="w-full mt-5 flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl w-full md:w-[50%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-10 px-16 md:p-20 md:py-10 mb-10 "
          >
            <h2 className="text-3xl font-bold text-center text-white mb-7">
              Register
            </h2>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                Name
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaUser size={24} className="text-white" />
                <input
                  type="text"
                  placeholder="Type Your Name"
                  {...register("Name", {
                    required: {
                      value: true,
                      message: "Please Fill Up This First",
                    },
                  })}
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                />
              </div>
              {errors.Name && (
                <p className="text-base text-red-600 font-semibold">
                  {errors.Name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                Photo URL
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <FaImage size={24} className="text-white" />
                <input
                  type="text"
                  {...register("Photo", {
                    required: {
                      value: true,
                      message: "Please Fill Up This ",
                    },
                  })}
                  placeholder="Type Your Photo URL"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                />
              </div>
              {errors.Photo && (
                <p className="text-base text-red-600 font-semibold">
                  {errors.Photo.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-5 mb-3">
              <label className="text-xl font-semibold text-gray-300">
                E-Mail
              </label>

              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                <CiMail size={24} className="text-white" />
                <input
                  type="email"
                  {...register("Email", {
                    required: {
                      value: true,
                      message: "Please Fill Up This",
                    },
                  })}
                  placeholder="Type Your Email"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                />
              </div>
              {errors.Email && (
                <p className="text-base text-red-600 font-semibold">
                  {errors.Email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold text-gray-300">
                Password
              </label>
              <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                {showPassword ? (
                  <CiUnlock size={24} className="text-white" />
                ) : (
                  <CiLock size={24} className="text-white" />
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("Password", {
                    validate: {
                      validatedPassword: (value) => {
                        if (value.length < 6) {
                          return "Password Should Be At Least 6 Character or Above";
                        } else if (!/[A-Z]/.test(value)) {
                          return "Password should contain at least one uppercase letter";
                        } else if (!/([a-z])/.test(value)) {
                          return "Your password should have at least one lowercase character";
                        }
                      },
                    },
                  })}
                  placeholder="Type Your Password"
                  className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaEyeSlash size={24} className="text-white" />
                  ) : (
                    <FaEye size={24} className="text-white" />
                  )}
                </span>
              </div>

              {errors.Password && (
                <p className="text-base text-red-600 font-semibold">
                  {errors.Password.message}
                </p>
              )}
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
