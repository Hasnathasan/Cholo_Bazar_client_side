import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Details from "../Pages/Details/Details";
import Electronics from "../Pages/Electronics/Electronics/Electronics";
import Irons from "../Pages/Electronics/Irons/Irons";
import Refrigerators from "../Pages/Electronics/Refrigerators/Refrigerators";
import Kettles from "../Pages/Electronics/Kettles/Kettles";
import AirCollers from "../Pages/Electronics/AirCollers/AirCollers";
import Televisions from "../Pages/Electronics/Televisions/Televisions";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import AdminDashBoard from "../UserDashboard/DashboardOfAdmin/AdminDashBoard";
import DashboardOfUser from "../UserDashboard/DashboardOfUser/DashboardOfUser";
import UserProfile from "../UserDashboard/DashboardOfUser/UserProfile/UserProfile";
import Overview from "../UserDashboard/DashboardOfAdmin/Overview";
import ManageUsers from "../UserDashboard/DashboardOfAdmin/ManageUsers";
import ManageProducts from "../UserDashboard/DashboardOfAdmin/ManageProducts";
import ManageOrders from "../UserDashboard/DashboardOfAdmin/ManageOrders";
import AddNewProduct from "../UserDashboard/DashboardOfAdmin/AddNewProduct";
import OrderProductDetails from "../UserDashboard/DashboardOfAdmin/OrderProductDetails";
import DeleveredOrders from "../UserDashboard/DashboardOfAdmin/DeleveredOrders";
import MyOrders from "../UserDashboard/DashboardOfUser/UserProfile/myOrders";
import OrderDetails from "../UserDashboard/DashboardOfUser/UserProfile/OrderDetails";
import IAmWorkingOnIt from "../Components/IAmWorkingOnIt/IAmWorkingOnIt";
import SignUp from "../Shared/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:apiPath/:id",
        element: <Details></Details>,
      },
      {
        path: "/electronics",
        element: <Electronics></Electronics>,
        children: [
          {
            path: "electronics",
            element: <Irons></Irons>,
          },
          {
            path: "refrigerators",
            element: <Refrigerators></Refrigerators>,
          },
          {
            path: "irons",
            element: <Irons></Irons>,
          },
          {
            path: "kettles",
            element: <Kettles></Kettles>,
          },
          {
            path: "airCollers",
            element: <AirCollers></AirCollers>,
          },
          {
            path: "televisions",
            element: <Televisions></Televisions>,
          },
        ],
      },
      {
        path: "/myAccount",
        element: <DashboardOfUser></DashboardOfUser>,
      },
      {
        path: "/my-section",
        element: <DashboardOfUser></DashboardOfUser>,
        children: [
          {
            path: "profile",
            element: <UserProfile></UserProfile>,
          },
        ],
      },
      {
        path: "/myCart",
        element: <Cart></Cart>,
      },
      {
        path: "/myOrders",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/checkOut",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/paymentSuccess/:transactionId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/products-details/:orderId",
        element: <OrderDetails></OrderDetails>
      },
      {
        path: "/comming-soon",
        element: <IAmWorkingOnIt></IAmWorkingOnIt>
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashBoard></AdminDashBoard>,
    children: [
      {
        path: "",
        element: <Overview></Overview>
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>
      },
      {
        path: "manageOrders",
        element: <ManageOrders></ManageOrders>
      },
      {
        path: "add-new-product",
        element: <AddNewProduct></AddNewProduct>
      },
      {
        path: "products-details/:orderId",
        element: <OrderProductDetails></OrderProductDetails>
      },
      {
        path: "deleveredOrders",
        element: <DeleveredOrders></DeleveredOrders>
      },
      
    ]
  }
]);

export default router;
