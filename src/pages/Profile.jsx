import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


const Profile = () => {
    const {user} = useContext(AuthContext)
    
  return (
    <div className="flex justify-center items-center min-h-screen px-5">
      <div className="shadow-custom w-full p-5 lg:w-[70%] lg:p-20 flex flex-col gap-10 items-center rounded-3xl">
        <figure>
          <img
            className="w-60 h-60  rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </figure>

        <div>
          <h1 className="md:text-2xl font-semibold text-gray-400">
            <span className="text-black font-bold mr-5">Name:</span>
            {user?.displayName ? user.displayName : "Update Your Name"}
          </h1>

          <p className="md:text-2xl font-semibold text-gray-400">
            <span className="text-black font-bold mr-5">Email:</span>
            {user?.email ? user.email : "Update Your Email"}
          </p>
          <p className="md:text-2xl font-semibold text-gray-400">
            <span className="text-black font-bold mr-5">Email Verified:</span>
            {user?.emailVerified ? "Email Verified" : "Not Verified"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile