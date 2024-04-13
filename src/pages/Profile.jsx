import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Helmet } from "react-helmet-async";
import BG from "../assets/bg-01.jpg";

const Profile = () => {
    const {user} = useContext(AuthContext)
    
  return (
    <div
      className="w-full min-h-screen mt-5 flex justify-center items-center px-5"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Helmet>
        <title>Saku Estates || Profile</title>
      </Helmet>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="shadow-custom w-full p-5 lg:w-[70%] lg:p-20 flex flex-col gap-10 items-center rounded-3xl"
      >
        <figure
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          className="border-8 shadow-custom rounded-full"
        >
          <img className="w-60 h-60 rounded-full" src={user?.photoURL} alt="" />
        </figure>

        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="md:text-2xl font-semibold text-gray-400"
          >
            <span className="text-black font-bold mr-5">Name:</span>
            {user?.displayName ? user.displayName : "Update Your Name"}
          </h1>

          <p
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="md:text-2xl font-semibold text-gray-400"
          >
            <span className="text-black font-bold mr-5">Email:</span>
            {user?.email ? user.email : "Update Your Email"}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="md:text-2xl font-semibold text-gray-400"
          >
            <span className="text-black font-bold mr-5">Email Verified:</span>
            {user?.emailVerified ? "Email Verified" : "Not Verified"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile