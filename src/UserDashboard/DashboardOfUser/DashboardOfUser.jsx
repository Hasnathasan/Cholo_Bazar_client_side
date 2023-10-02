import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import noUser from '../../../public/user.png'
import './DashboardOfUser.css'


const DashboardOfUser = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="grid grid-cols-12 max-w-[1100px] mx-auto">
            <div className="col-span-3">
                <div className="w-[250px] mt-7 shadow-lg rounded-[4px] bg-white px-6 py-5 gap-2 flex items-center">
                    <img className="w-[55px] rounded-full" src={user?.photoURL || noUser} alt="" />
                    <div>
                    <h5 className="text-[15px]">Hello,</h5>
                    <h4>{user?.displayName || user?.phoneNumber}</h4>
                    </div>
                </div>

                <div className="my-5 navlinks flex flex-col bg-white w-[250px]">
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Account</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/orders">My Orders</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/lists">Download Free Book</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My eBook Library</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My List</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Book Shelf</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Wishlist</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Rating Reviews</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Points</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Following Authors</NavLink>
                    <NavLink className="p-4 text-[17px]" to="/my-section/profile">My Bkash Account</NavLink>
                </div>
            </div>
            <div className="col-span-9">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardOfUser;