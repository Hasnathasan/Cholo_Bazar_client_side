import { FaBookmark, FaHome, FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill, BsPersonCircle } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import './AdminDashBoard.css'
import { Button } from "@nextui-org/react";
const AdminDashBoard = () => {

  const mainLinks = <>
  <li>
            <NavLink className="p-3 text-base" to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/cart">
              <FaShoppingCart></FaShoppingCart> Cart
            </NavLink>
          </li>
  </>
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[100%] mt-12 lg:mt-0 overflow-auto px-2 md:px-0 flex flex-col min-h-screen items-center justify-start py-8">
        {/* Page content here */}
        <Outlet></Outlet>
        {/* <label
          
          className="btn btn-primary"
        >
          Open drawer
        </label> */}
        <div className=" bg-white shadow rounded-md mx-2 flex justify-center items-center p-3 absolute top-2 lg:hidden left-0 right-0">
        <Button
                  className="basis-1/2 hover:!text-white"
                  size="sm"
                  color="primary"
                  radius="none"
                  variant="solid"
                >
                  <label htmlFor="my-drawer-2" className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center drawer-button">Open Dashboard</label>
                </Button>
        </div>
      </div>
      <div className="drawer-side w-full z-[1000]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* Sidebar content here */}
        <div className="w-80"></div>
        <ul className="menu flex-nowrap top-0 fixed px-8 h-screen bg-gray-200 py-10 w-80 space-y-2">
        <h2 className="text-2xl md:text-3xl mb-5">Admin Dashboard</h2>
        <li>
            <NavLink className="p-3 text-base" to=" ">
              <BsPersonCircle></BsPersonCircle> Overview
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="manageUsers">
              <BsFillPeopleFill></BsFillPeopleFill> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="manageProducts">
              <FaProductHunt></FaProductHunt> Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="add-new-product">
              <FaProductHunt></FaProductHunt> Add New Product
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="manageOrders">
              <FaBookmark></FaBookmark> Manage Orders
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="deleveredOrders">
              <FaBookmark></FaBookmark> Delevered Orders
            </NavLink>
          </li>
          <div className="divider"></div>
            {mainLinks}
          
        </ul>
      </div>
    </div>
  );
};

export default AdminDashBoard;
