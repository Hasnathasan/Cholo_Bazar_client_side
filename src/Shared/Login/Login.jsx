import "./Login.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PhoneAuth from "../../Components/PhoneAuth/PhoneAuth";

const Login = () => {
  const { googleLogin, faceBookSignIn, user } = useContext(AuthContext);
  console.log(user);
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFBSignIn = () => {
    faceBookSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-10">
      <div className="bg-white mx-auto w- md:w-[560px] shadow-lg p-2 md:p-8 rounded-r-md text-center">
        <div className="mb-6">
          <h1 className="text-xl to-black font-medium px-5 py-2 w-full">
            LOGIN / SIGN UP
          </h1>
          <div className="border-b-[1px] border-gray-600 w-52 mx-auto"></div>
        </div>

        <div className="flex flex-col w-full border-opacity-50 mb-7">
          <div className="grid h-20 card rounded-box place-items-center">
            <div className="flex justify-center items-center text-center space-x-6">
              <button
                onClick={handleFBSignIn}
                className="flex items-center p-3 px-8 f-style text-white bg-blue-500"
              >
                <FaFacebookF className="text-2xl mr-2" />
                Facebook
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center p-3 px-8 g-style text-white bg-red-500"
              >
                <FaGoogle className="text-2xl mr-2" />
                Google
              </button>
            </div>
          </div>
          <div className="font-semibold text-[15px] mb- mt-5">OR</div>

          <PhoneAuth className="px-10"></PhoneAuth>
        </div>
      </div>
    </div>
  );
};

export default Login;
