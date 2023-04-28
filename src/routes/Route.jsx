import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Catalog from "../pages/Catalog/Catalog";
import DetailCourse from "../pages/DetailCourse/DetailCourse";
import Payment from "../pages/Payment/Payment";
import Confirmation from "../pages/Payment/Confirmation";
import Setting from "../pages/Setting/Setting";
import MyCourse from "../pages/MyCourse/MyCourse";

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
    },
    {
        path: "/detailcourse",
        element: <DetailCourse/>,
    },
    {
        path: "/payment",
        element: <Payment/>,
    },
    {
        path: "/confirmation",
        element: <Confirmation/>,
    },
    {
        path: "/setting",
        element: <Setting/>,
    },
    {
        path: "/mycourse",
        element: <MyCourse/>,
    }
];

export default Routers