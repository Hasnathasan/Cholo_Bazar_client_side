
import { Tooltip } from "@nextui-org/react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Electronics = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content max-w-5xl mx-auto flex flex-col items-start justify-start">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side w-full p-">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-64"></div>
        <ul className="menu flex-nowrap fixed top-1/4 left-2 shadow-lg shadow-gray-300 bg-white px-8  py-10 w-64 space-y-2">
          <h2 className="text-2xl mb-5">Filter</h2>
         
          <li>
            <NavLink className="p-3 text-base" to="/allUsers">
              <FaHome></FaHome> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/allProducts">
              <FaHome></FaHome> Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/addProduct">
              <FaHome></FaHome> Add New Product
            </NavLink>
          </li>
          <li>
            <Tooltip content={"Add Task"} className="capitalize">
              <h1>Hello</h1>
            </Tooltip>
          </li>
        </ul>
      </div>
</div>
    );
};

export default Electronics;