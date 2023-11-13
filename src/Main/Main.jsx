
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { useEffect } from "react";

const Main = () => {
    const location = useLocation();
useEffect(() => {
window.scrollTo(0, 0);
}, [location.pathname]);
    return (
        <div className="">
            <NavigationBar></NavigationBar>
         <div className="md:mt-[88px]">
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Main;