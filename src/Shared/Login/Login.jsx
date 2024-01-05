import "./Login.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PhoneAuth from "../../Components/PhoneAuth/PhoneAuth";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { googleLogin, faceBookSignIn, user, loginWithEmail } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(user);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    setErrorMessage(null);
    googleLogin()
      .then((result) => {
        console.log(result.user, "Hi");
        if (result?.user) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  const handleFBSignIn = () => {
    setErrorMessage(null);
    faceBookSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    setErrorMessage(null);
    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        reset();
        Swal.fire(
          "Login Successfull",
          "User has logged in successfully",
          "success"
        );
        navigate("/");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="py-10">
      <div className="bg-white mx-auto w- md:w-[560px] md:shadow-lg p-2 md:p-8 rounded-r-md text-center">
        <div className="mb-6">
          {errorMessage && (
            <h3 className="text-left text-red-500 text-sm mb-2">
              {errorMessage.slice(10, -1)}
            </h3>
          )}
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
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[90%] flex flex-col justify-center gap-5 mx-auto"
            >
              <Input
                {...register("email", { required: true })}
                type="email"
                label="Your Email"
                size="sm"
                placeholder="example@gmail.com"
                variant="underlined"
                labelPlacement="outside"
              />
              <Input
                {...register("password", { required: true })}
                type="password"
                label="Your Password"
                size="sm"
                placeholder="********"
                variant="underlined"
                labelPlacement="outside"
              />
              <Button
                type="submit"
                className="mt-3 block"
                color="primary"
                radius="none"
                variant="ghost"
              >
                Login
              </Button>
              <p className="text-[15px]">
                Haven&apos;t any Account?{" "}
                <Link to={"/signUp"} className="text-blue-500">
                  Create One
                </Link>
              </p>
            </form>
          </div>
          <div className="font-semibold text-[15px] mb- mt-8">OR</div>
          <PhoneAuth className="px-10"></PhoneAuth>
        </div>
      </div>
    </div>
  );
};

export default Login;
