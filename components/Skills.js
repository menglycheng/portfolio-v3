import { CodeBracketIcon } from "@heroicons/react/24/outline";
import React from "react";

const Skills = ({ skill }) => {
  return (
    <div className="text-white">
      <div className="pt-7 flex flex-row flex-wrap w-full ">
        {skill.skill.map((item, index) => (
          <div key={item._id}>
            <div className="flex m-1  justify-center cursor-pointer hover:text-[#0a0d14] hover:bg-blue-500 items-center border border-blue-500 w-fit px-3 rounded-md">
              <CodeBracketIcon className="w-4 h-4 mr-2" />
              <p className="text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
