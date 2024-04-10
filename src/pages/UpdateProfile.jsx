import { useForm } from "react-hook-form";
import BG from "../assets/bg-01.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast'
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import {useNavigate} from 'react-router-dom'



const UpdateProfile = () => {

  const { user, setUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const auth = getAuth(app);

   const naviGate = useNavigate();

  const onSubmit = data => {
    const name = data.Name;
    const photo = data.Photo;
    const email = data.Email;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      email: email,
    })
      .then(() => {
        if(user) {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
            email: email,
          });
        }
        toast.success("Profile Updated Successfully");
        naviGate('/')
      })
      .catch(() => toast.error("Profile Updated Failed"));
  };

  return (
    <div>
      <div>
        <div
          className="w-full mt-5 flex justify-center items-center px-5"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div className="shadow-custom my-10 rounded-xl w-full md:w-[50%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="py-10 px-16 md:p-20 md:py-10 mb-10 "
            >
              <h2 className="text-3xl font-bold text-center text-white mb-7">
                Update Your Profile
              </h2>

              <div className="flex flex-col gap-2 mt-5 mb-3">
                <label className="text-xl font-semibold text-gray-300">
                  Name
                </label>

                <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
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
                    className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-5 mb-3">
                <label className="text-xl font-semibold text-gray-300">
                  Photo URL
                </label>

                <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
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
                    className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-5 mb-3">
                <label className="text-xl font-semibold text-gray-300">
                  E-Mail
                </label>

                <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                  <input
                    type="email"
                    placeholder={user?.email ? user.email : "Type Your Email"}
                    {...register("Email")}
                    className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                  />
                </div>
              </div>

              <button type="submit" className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full">
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
