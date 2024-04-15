import { useForm } from "react-hook-form";
import BG from "../assets/bg-01.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = getAuth(app);

  const naviGate = useNavigate();

  const onSubmit = data => {
    const { Name, Photo,  } = data;

    updateProfile(auth.currentUser, {
      displayName: Name,
    })
      .then(() => {
        if (user) {
          setUser({
            ...user,
            displayName: Name,
            photoURL: Photo,
          });
        }
        toast.success("Profile Updated Successfully");
        naviGate("/");
      })
      .catch(() => toast.error("Profile Updated Failed"));
  };

  return (
    <div>
      <Helmet>
        <title>Saku Estates || Update Profile</title>
      </Helmet>
      <div>
        <div
          className="w-full mt-5 flex justify-center items-center px-5"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="shadow-custom my-10 rounded-xl w-full md:w-[50%]"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="py-10 px-16 md:p-20 md:py-10 mb-10 "
            >
              <h2
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                className="text-3xl font-bold text-center text-white mb-7"
              >
                Update Your Profile
              </h2>

              <div className="flex flex-col gap-2 mt-5 mb-3">
                <label
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="text-xl font-semibold text-gray-300"
                >
                  Name
                </label>

                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="w-full shadow-custom rounded-full flex items-center py-2 px-3"
                >
                  <input
                    type="text"
                    placeholder={
                      user?.displayName ? user.displayName : "Type Your Name"
                    }
                    {...register("Name", {
                      required: {
                        value: true,
                        message: "Please Fill Up This",
                      },
                    })}
                    defaultValue={user.displayName}
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
                <label
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="text-xl font-semibold text-gray-300"
                >
                  Photo URL
                </label>

                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="w-full shadow-custom rounded-full flex items-center py-2 px-3"
                >
                  <input
                    type="text"
                    placeholder={
                      user?.photoURL ? user.photoURL : "Type Your Photo URL"
                    }
                    {...register("Photo", {
                      required: {
                        value: true,
                        message: "Please Fill Up This",
                      },
                    })}
                    defaultValue={user.photoURL}
                    className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  />
                </div>
                {errors.Photo && (
                  <p className="text-base text-red-600 font-semibold">
                    {errors.Photo.message}
                  </p>
                )}
              </div>


              <button
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                type="submit"
                className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
