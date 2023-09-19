import './Login.css';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { BsEnvelope } from "react-icons/bs";

const Login = () => {
  return (
    <div className='py-10'>
       <div className="bg-white mx-auto w-[560px] shadow-lg p-8 rounded-r-md text-center">
          <div className="mb-6">
            <h1 className="text-xl to-black font-medium px-5 py-2 w-full">
              LOGIN / SIGN UP
            </h1>
            <div className="border-b-[1px] border-gray-600 w-52 mx-auto"></div>
          </div>

          <div className="flex flex-col w-full border-opacity-50 mb-7">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <div className="flex justify-center items-center text-center space-x-6">
                <button className="flex items-center p-3 px-8 f-style text-white bg-blue-500">
                  <FaFacebookF className="text-2xl mr-2" />
                  Facebook
                </button>
                <button className="flex items-center p-3 px-8 g-style text-white bg-red-500">
                  <FaGoogle className="text-2xl mr-2" />
                  Google
                </button>
              </div>
            </div>
            <div className="font-semibold text-[15px] mb-7 mt-5">OR</div>
            <div className="grid card bg-base-300 rounded-box px-6 md:px-10">
              <div className="flex items-end justify-center">
                <BsEnvelope className="text-xl text-gray-400 border-b-2 w-7 h-7 pb-2 px-[2px]" />
                <input className="outline-0 text-gray-600  border-b-2 px-2 pb-1 focus:border-sky-400 duration-300 w-full" type="number" placeholder="Type your Phone Number" />
              </div>
            </div>
          </div>
          <div className="px-6 md:px-10 mt-14">
            <button className="bg-green-500 w-full p-3 px-8 rounded font-semibold text-white">
              SUBMIT
            </button>
          </div>
        </div>
    </div>
       
  );
};

export default Login;
