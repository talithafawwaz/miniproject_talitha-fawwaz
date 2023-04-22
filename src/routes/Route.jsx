import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";

const Routers = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
];

export default Routers