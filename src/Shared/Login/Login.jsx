import './Login.css';
import { FaEnvelope, FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="flex justify-center p-5 md:p-10">
        <div className="bg-white w-full md:w-1/2 xl:w-1/3 p-8 text-center">
          <div className="mb-6">
            <h1 className="text-2xl to-black font-semibold px-5 py-2 w-full">
              LOGIN / SIGN UP
            </h1>
            <div className="border-b-2 border-gray-400 w-52 mx-auto"></div>
          </div>

          <div className="flex flex-col w-full border-opacity-50 mb-7">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <div className="flex justify-center items-center text-center space-x-6">
                <button className="flex items-center p-3 px-8 f-style text-white bg-blue-500">
                  <FaFacebook className="text-2xl mr-2" />
                  Facebook
                </button>
                <button className="flex items-center p-3 px-8 g-style text-white bg-red-500">
                  <FaGoogle className="text-2xl mr-2" />
                  Google
                </button>
              </div>
            </div>
            <div className="divider h-20 text-2xl font-semibold mt-8">OR</div>
            <div className="grid card bg-base-300 rounded-box px-6 md:px-10">
              <div className="flex items-center border-b-2 p-2">
                <FaEnvelope className="text-xl mr-2" />
                <input className="outline-0 w-full" type="Email" placeholder="Type your Email" />
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
    </div>
  );
};

export default Login;
