import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import NotFoun from "../components/NotFoun";
import ResidentialDetails from "../pages/ResidentialDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFoun/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/updateProfile',
            element: <UpdateProfile/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/contact',
            element: <ResidentialDetails/>
        },

    ]
  },
]);

export default router;
