import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import noUser from "../../../public/user.png";
import "./DashboardOfUser.css";

const DashboardOfUser = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid grid-cols-12 max-w-[1100px] mx-auto">
      <div className="col-span-3 hidden md:inline">
        <div className="w-[250px] mt-7 shadow-lg rounded-[4px] bg-white px-6 py-5 gap-2 flex items-center">
          <img
            className="w-[55px] rounded-full"
            src={user?.photoURL || noUser}
            alt=""
          />
          <div>
            <h5 className="text-[15px]">Hello,</h5>
            <h4>{user?.displayName || user?.phoneNumber}</h4>
          </div>
        </div>

        <div className="my-5 navlinks flex flex-col bg-white w-[250px]">
          <NavLink className="p-4 text-[17px]" to="/my-section/profile">
            My Account
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/myOrders">
            My Orders
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            Download Free Book
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My eBook Library
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My List
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Book Shelf
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Wishlist
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Rating Reviews
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Points
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Following Authors
          </NavLink>
          <NavLink className="p-4 text-[17px]" to="/comming-soon">
            My Bkash Account
          </NavLink>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardOfUser;
