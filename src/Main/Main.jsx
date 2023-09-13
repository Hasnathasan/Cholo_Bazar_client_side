
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
         <div className=" mt-[85px]">
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Main;