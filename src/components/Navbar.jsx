import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

  const { user, loggedOutUser} = useContext(AuthContext);

  const handleLoggedOut = () => {
    loggedOutUser()
      
  }

    const navLinks = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#1D5D9B] hover:bg-transparent bg-transparent font-semibold text-lg"
                : "font-semibold text-lg hover:bg-transparent bg-transparent text-gray-400 hover:text-[#1D5D9B]"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-[#1D5D9B] hover:bg-transparent bg-transparent font-semibold text-lg"
                : "font-semibold text-lg hover:bg-transparent bg-transparent text-gray-400 hover:text-[#1D5D9B]"
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/estates"
            className={({ isActive }) =>
              isActive
                ? "text-[#1D5D9B] hover:bg-transparent bg-transparent font-semibold text-lg"
                : "font-semibold text-lg hover:bg-transparent bg-transparent text-gray-400 hover:text-[#1D5D9B]"
            }
          >
            Estates
          </NavLink>
        </li>

        <li>
          {user && (
            <NavLink
              to="/updateProfile"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1D5D9B] hover:bg-transparent bg-transparent font-semibold text-lg"
                  : "font-semibold text-lg hover:bg-transparent bg-transparent text-gray-400 hover:text-[#1D5D9B]"
              }
            >
              Update Profile
            </NavLink>
          )}
        </li>

        <li>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1D5D9B] hover:bg-transparent bg-transparent font-semibold text-lg"
                  : "font-semibold text-lg hover:bg-transparent bg-transparent text-gray-400 hover:text-[#1D5D9B]"
              }
            >
             User Profile
            </NavLink>
          )}
        </li>
      </>
    );
  return (
    <div className="w-full max-w-[1170px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-base sm:text-2xl md:text-3xl font-bold text-[#1D5D9B]">
            Saku Estates
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          
          <div>
            {user ? <div className="dropdown dropdown-end ml-5">
                <div
                  tabIndex={0}
                  role="button"
                  data-tip={user.displayName}
                  className="avatar tooltip tooltip-bottom"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL ? user.photoURL : <FaUser size={24}/> }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLoggedOut}>Logout</button>
                  </li>
                </ul>
              </div>
              : <FaUser size={24}/>}
          </div>

          {user ? (
            <button
              onClick={handleLoggedOut}
              className="py-2 px-3 md:px-7 border border-[#1D5D9B] text-black font-medium ml-5 hover:bg-[#1D5D9B] hover:text-white duration-700 rounded-3xl"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="py-2 px-7 border border-[#1D5D9B] text-black font-medium ml-5 hover:bg-[#1D5D9B] hover:text-white duration-700 rounded-3xl">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar