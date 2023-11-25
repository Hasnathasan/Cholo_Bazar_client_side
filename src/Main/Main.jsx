import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainNavigation from "../Shared/NavigationBar/MainNavigation/MainNavigation";
import cycling from "../../public/cycelling.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Main = () => {
  const { isAnimationVisible, setIsAnimationVisible } = useContext(AuthContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimationVisible(false);
    }, 3000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [setIsAnimationVisible]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isAnimationVisible ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Lottie loop={true} animationData={cycling}></Lottie>
        </div>
      ) : (
        <div className="">
          <MainNavigation></MainNavigation>
          <div className="md:mt-[120px]">
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
