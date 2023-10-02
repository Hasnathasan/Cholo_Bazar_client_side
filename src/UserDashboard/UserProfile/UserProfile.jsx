import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import useUser from "../../Hooks/useUser";
import noUser from '../../../public/user.png'

const UserProfile = () => {
    const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);
    const [updateNumber, setUpdateNumber] = useState(false);
    const [updateEmail, setUpdateEmail] = useState(false);
    const [updateProfilePic, setUpdateProfilePic] = useState(false);
    const [updatePassword, setUpdatePassword] = useState(false);
    const [userData, isUserDataLoading] = useUser();
    if(isUserDataLoading){
      return <h1>Loading....</h1>
    }
    console.log(userData);
  return (
    <div className="my-7">
      <div className="bg-white mb-8 p-4 shadow-lg rounded border-t-2 border-green-500">
        <p className="flex items-center gap-1">
          <BsExclamationCircleFill className="rotate-180 w-[18px] h-[18px] text-cyan-600" />
          You have not set your password yet!
        </p>
      </div>

      <div className="bg-white p-5 shadow-lg rounded border-t-2 border-green-500">
        <div className="flex items-center gap-8">
          <h2 className="text-xl text-gray-700">Personal Information</h2>
          <p className={`${updatePersonalInfo ? "hidden" : ""} text-sky-500 cursor-pointer`} onClick={() => setUpdatePersonalInfo(true)}>Change Information</p>
        </div>
        <hr className="my-5" />
       <form action="">
       <label className="block my-3" htmlFor="name">
          Name
        </label>
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
          defaultValue={userData?.name}
          disabled={!updatePersonalInfo}
        />
        <label className="block my-3" htmlFor="name">
          Your Date of Birth
        </label>
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="date"
          defaultValue={userData?.date_of_birth}
          disabled={!updatePersonalInfo}
        />
        <RadioGroup className="my-3" label="Gender" defaultValue={userData?.gender} orientation="horizontal" isDisabled={!updatePersonalInfo}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
        <button className={`px-5 py-2 mt-5 font-semibold text-lg border rounded bg-[#3bd257] text-white ${!updatePersonalInfo ? "hidden" : ""} border-[#3bd257]`}>
          Save
        </button>
       </form>
        <hr className="my-7" />
        <div className="flex items-center gap-8">
          <h2 className="text-xl text-gray-700">Mobile Number</h2>
          <p className={`${updateNumber ? "hidden" : ""} text-sky-500 cursor-pointer`} onClick={() => setUpdateNumber(true)}>Change Mobile Number</p>
        </div>
        <hr className="my-5" />
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="number"
          defaultValue={userData?.phoneNumber}
          disabled={!updateNumber}
        />
        <button className={`px-5 py-2 mt-5 font-semibold text-lg border block rounded bg-[#3bd257] text-white ${!updateNumber ? "hidden" : ""} border-[#3bd257]`}>
          Send OTP
        </button>
        <hr className="my-7" />
        <div className="flex items-center gap-8">
          <h2 className="text-xl text-gray-700">Email Address</h2>
          <p className={`${updateEmail ? "hidden" : ""} text-sky-500 cursor-pointer`} onClick={() => setUpdateEmail(true)}>Change Email Address</p>
        </div>
        <hr className="my-5" />
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
          defaultValue={userData?.email}
          disabled={!updateEmail}
        />
        <button className={`px-5 py-2 mt-5 font-semibold text-lg border block rounded bg-[#3bd257] text-white ${!updateEmail ? "hidden" : ""} border-[#3bd257]`}>
          Send OTP
        </button>
        <hr className="my-7" />
        <div className="flex items-center gap-8">
          <h2 className="text-xl text-gray-700">Profile Picture</h2>
          <p className={`${updateProfilePic ? "hidden" : ""} text-sky-500 cursor-pointer`} onClick={() => setUpdateProfilePic(true)}>Change Profile Picture</p>
        </div>
        <p className="text-xs text-gray-700 mt-1">(PNG/JPG/JPEG/BMP, Max. 3MB)</p>
        <hr className="my-5" />
        <h3 className="mb-3 text-[17px]">Your Profile Photo</h3>
        <div className="flex items-center gap-9">
          <img className="rounded-full w-[110px] h-[110px]" src={userData?.photoUrl || noUser} alt="" />
          <input className={`${!updateProfilePic ? "hidden" : ""}`} type="file" />
        </div>
        <button className={`px-5 py-2 mt-5 font-semibold text-lg border block rounded bg-[#3bd257] text-white ${!updateProfilePic ? "hidden" : ""} border-[#3bd257]`}>
          Save
        </button>
        <hr className="my-7" />
        <div className="flex items-center gap-8">
          <h2 className="text-xl text-gray-700">Password</h2>
          <p className={`${updatePassword ? "hidden" : ""} text-sky-500 cursor-pointer`} onClick={() => setUpdatePassword(true)}>Add Password</p>
        </div>
        <hr className="my-5" />
        <div className={`flex items-center gap-9 ${updatePassword ? "" : "hidden"}`}>
        <div>
          <label className="block my-3 text-gray-800" htmlFor="newPass">New Password</label>
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
          defaultValue={userData?.password}
        />
        </div>
        <div>
          <label className="block my-3 text-gray-800" htmlFor="newPass">Confirm Password</label>
        <input
          className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
        />
        </div>
        </div>
        <button className={`px-5 py-2 mt-5 font-semibold text-lg border block rounded bg-[#3bd257] text-white ${!updatePassword ? "hidden" : ""} border-[#3bd257]`}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
