import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import NotFoun from "../components/NotFoun";
import ResidentialDetails from "../pages/ResidentialDetails";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import Residentials from "../components/Residentials";
import About from "../components/About";
// import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoun />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/estates",
        element: <Residentials />,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/estates/:id",
        element: (
          <ProtectedRoute>
            <ResidentialDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
