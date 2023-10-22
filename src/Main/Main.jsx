
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div className="overflow-x-hidden">
            <NavigationBar></NavigationBar>
         <div className="md:mt-[88px]">
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Main;