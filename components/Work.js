import {
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Moment from "react-moment";

const Work = ({ experiences }) => {
  console.log(experiences.experiences);
  return (
    <div className="w-full mt-16 text-left">
      <h2 className="font-bold text-lg">Work Experience</h2>
      <div className="mt-5">
        {experiences.experiences.map(
          ({ _id, role, company, start_date, end_date, description }) => {
            return (
              <div
                key={_id}
                className="w-full border p-3 my-3 rounded-md border-blue-500 min-h-32"
              >
                <div className="bg-blue-500 w-fit p-2 rounded-md text-[#0a0d14]">
                  <BriefcaseIcon className="w-5 h-5" />
                </div>
                <div className="flex pt-2">
                  <h1 className="font-bold ">
                    {role} @ {company}
                  </h1>
                </div>

                <p className="text-xs">
                  <Moment format="DD-MMM-YYYY">{start_date}</Moment> -
                  {end_date ?? (
                    <span>
                      <Moment format="DD-MMM-YYYY">{end_date}</Moment>
                    </span>
                  )}
                </p>

                <div className="px-3 pt-2 text-sm">
                  {description.map((desc) => (
                    <>
                      <div className="flex my-1 ">
                        <InformationCircleIcon className="w-5 h-5 mr-2" />

                        <p>{desc}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Work;
