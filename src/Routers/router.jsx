import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Details from "../Pages/Details/Details";
import DashboardOfUser from "../UserDashboard/DashboardOfUser/DashboardOfUser";
import UserProfile from "../UserDashboard/UserProfile/UserProfile";
import Electronics from "../Pages/Electronics/Electronics/Electronics";
import Irons from "../Pages/Electronics/Irons/Irons";
import Refrigerators from "../Pages/Electronics/Refrigerators/Refrigerators";
import Kettles from "../Pages/Electronics/Kettles/Kettles";
import AirCollers from "../Pages/Electronics/AirCollers/AirCollers";
import Televisions from "../Pages/Electronics/Televisions/Televisions";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/details/:apiPath/:id',
          element: <Details></Details>
        },
        {
          path: '/electronics',
          element: <Electronics></Electronics>,
          children: [
            {
              path: 'electronics',
              element: <Irons></Irons>
            },
            {
              path: 'refrigerators',
              element: <Refrigerators></Refrigerators>
            },
            {
              path: 'irons',
              element: <Irons></Irons>
            },
            {
              path: 'kettles',
              element: <Kettles></Kettles>
            },
            {
              path: 'airCollers',
              element: <AirCollers></AirCollers>
            },
            {
              path: 'televisions',
              element: <Televisions></Televisions>
            },
          ]
        },
        {
          path: '/myAccount',
          element: <DashboardOfUser></DashboardOfUser>
        },
        {
          path: "/my-section",
          element: <DashboardOfUser></DashboardOfUser>,
          children: [
            {
              path: "profile",
              element: <UserProfile></UserProfile>
            }
          ]
        },
        {
          path: "/myCart",
          element: <Cart></Cart>
        },
        {
          path: "/checkOut",
          element: <CheckOut></CheckOut>
        },
      ]
    }
  ]);


export default router;