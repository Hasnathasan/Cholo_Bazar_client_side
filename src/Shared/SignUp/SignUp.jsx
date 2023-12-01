import { Button, Input } from "@nextui-org/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const {signUpWithEmail, logout} = useContext(AuthContext)
    const onSubmit = (data) => {
        const { name, email, password } = data;
    signUpWithEmail(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            logout();
                Swal.fire("Account created successfully", " ", "success");
          })
          .catch((error) => {
           console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
       };
    return (
        <div className="w-full py-7">
            <div className="max-w-2xl mx-auto p-3 md:p-7 bg-white shadow-md rounded">
            <div className="mb-6 text-center">
          <h1 className="text-xl font-medium px-5 py-2 w-full">
            LOGIN / SIGN UP
          </h1>
          <div className="border-b-[1px] border-gray-600 w-52 mx-auto"></div>
        </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] flex flex-col justify-center gap-5 mx-auto">
          <Input
              {...register("name", { required: true })}
              type="text"
              label="Your Name"
              size="sm"
              placeholder="Your Name"
              variant="underlined"
              labelPlacement="outside"
            />
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
          Sign Up
        </Button>
        <p className="text-[15px]">Have an Account? <Link to={"/login"} className="text-blue-500">Sign In</Link></p>
          </form>
            </div>
        </div>
    );
};

export default SignUp;