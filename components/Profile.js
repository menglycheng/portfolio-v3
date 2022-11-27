import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="flex-col-reverse flex md:flex-row justify-between w-full mt-20">
      {/* image */}
      <div className="text-left pr-0 md:pr-10">
        <h1 className=" text-2xl md:text-3xl font-bold ">Mengly Cheng</h1>
        <div className="flex justify-left items-center pt-2">
          <MapPinIcon className="w-5 h-5 mr-2 text-gray-400" />
          <p className="text-sm text-gray-400">Phnom Penh, Cambodia</p>
        </div>
        <div className="pt-5 text-sm">
          <p className="text-gray-400">
            Currently a senior student at Kirirom Insitute of Technology,
            Majoring Software Engineering.
          </p>
        </div>
      </div>
      <div>
        <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center">
          <div className=" w-[106px] h-[106px] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
