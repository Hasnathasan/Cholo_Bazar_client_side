import { Radio, RadioGroup } from "@nextui-org/react";
import { BsExclamationCircleFill } from "react-icons/bs";


const UserProfile = () => {
    return (
        <div className="mt-7">
            <div className='bg-white mb-8 p-4 shadow-lg rounded border-t-2 border-green-500'>
                <p className='flex items-center gap-1'><BsExclamationCircleFill className="rotate-180 w-[18px] h-[18px] text-cyan-600" />You have not set your password yet!</p>
            </div>

            <div className="bg-white p-5 shadow-lg rounded border-t-2 border-green-500">
                <div className="flex items-center gap-8">
                    <h2 className="text-xl text-gray-700">Personal Information</h2>
                    <p className="text-sky-500">Change Information</p>
                </div>
                <hr className="my-5" />
                <label className="block my-3" htmlFor="name">Name</label>
                <input className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300" type="text" />
                <label className="block my-3" htmlFor="name">Your Date of Birth</label>
                <input className="p-[15px] w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300" type="date" />
                <RadioGroup
                className="my-3"
      label="Gender"
      orientation="horizontal"
    >
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
    </RadioGroup>
    <button className='px-5 py-2 mt-5 font-semibold text-lg border rounded bg-[#3bd257] text-white border-[#3bd257]'>Save</button>
    <hr className="my-7" />
            </div>
        </div>
    );
};

export default UserProfile;