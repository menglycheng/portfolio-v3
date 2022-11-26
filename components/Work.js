import {
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Work = ({ experiences }) => {
  return (
    <div className="w-full mt-16 text-left">
      <h2 className="font-bold text-lg">Work Experience</h2>
      <div className="mt-5">
        {experiences.experiences.map((item) => (
          <div
            key={item._id}
            className="w-full border p-3 my-3 rounded-md border-blue-500 min-h-32"
          >
            <div className="bg-blue-500 w-fit p-2 rounded-md text-[#0a0d14]">
              <BriefcaseIcon className="w-5 h-5" />
            </div>
            <div className="flex pt-2">
              <h1 className="font-bold ">
                {item.role} @ {item.company}
              </h1>
            </div>
            <p className="text-xs">{item.date}</p>
            <div className="px-3 pt-2 text-sm">
              <div className="flex ">
                <InformationCircleIcon className="w-5 h-5 mr-2" />
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
