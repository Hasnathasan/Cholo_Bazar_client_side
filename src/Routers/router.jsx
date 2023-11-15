import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Details from "../Pages/Details/Details";
import DashboardOfUser from "../UserDashboard/DashboardOfUser/DashboardOfUser";
import UserProfile from "../UserDashboard/UserProfile/UserProfile";
import Electronics from "../Pages/Electronics/Electronics/Electronics";



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
          element: <Electronics></Electronics>
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
        }
      ]
    }
  ]);


export default router;