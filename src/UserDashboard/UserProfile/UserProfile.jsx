import { Radio, RadioGroup } from "@nextui-org/react";
import { useContext, useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import useUser from "../../Hooks/useUser";

const UserProfile = () => {
    const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);
    const [updateNumber, setUpdateNumber] = useState(false);
    const [updateEmail, setUpdateEmail] = useState(false);
    const {user} = useContext(AuthContext);
    const [userData, isUserDataLoading] = useUser();
    console.log(userData);
  return (
    <div className="mt-7">
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
      </div>
    </div>
  );
};

export default UserProfile;
