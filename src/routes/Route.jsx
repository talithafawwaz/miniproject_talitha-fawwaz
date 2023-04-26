import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Catalog from "../pages/Catalog/Catalog";

const Routers = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/catalog",
        element: <Catalog/>,
    }
];

export default Routers