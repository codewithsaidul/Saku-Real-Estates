import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import NotFoun from "../components/NotFoun";
import ResidentialDetails from "../pages/ResidentialDetails";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFoun/>,
    children: [
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('./residential.json')
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
            path: '/register',
            element: <Register/>
        },
        {
            path: '/contact',
            element: <ResidentialDetails/>
        },

    ]
  },
]);

export default router;
