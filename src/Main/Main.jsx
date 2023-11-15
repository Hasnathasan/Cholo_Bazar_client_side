
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavTopBar";
import { useEffect } from "react";
import MainNavigation from "../Shared/NavigationBar/MainNavigation/MainNavigation";

const Main = () => {
    const location = useLocation();
useEffect(() => {
window.scrollTo(0, 0);
}, [location.pathname]);
    return (
        <div className="">
            <MainNavigation></MainNavigation>
         <div className="">
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Main;