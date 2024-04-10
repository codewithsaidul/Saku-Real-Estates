import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BG from "../assets/bg-01.jpg";

const ProtectedRoute = ({ children }) => {
 const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <span className="loading loading-ring loading-lg"></span>;
      </div>
    );
  }

  if (user) {
    return children;
  } 

  return (
    <div
      className="w-full mt-5 min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="text-center">
        <h2 className="text-center text-3xl text-gray-700 font-normal mb-10">
          Please Login First
        </h2>

        <Link
          to="/login"
          className="px-5 py-3 shadow-custom text-xl text-white font-semibold rounded-full"
        >
          Login In Here
        </Link>
      </div>
    </div>
  );
};


ProtectedRoute.propTypes = {
  children: PropTypes.node,
};


export default ProtectedRoute