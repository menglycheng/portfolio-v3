import {
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import WorkCard from "./WorkCard";

const Work = ({ experiences }) => {
  console.log(experiences.experiences);
  return (
    <div className="w-full mt-16 text-left">
      <h2 className="font-bold text-lg">Work Experience</h2>
      <div className="mt-5">
        {experiences.experiences.map(
          ({ _id, role, company, start_date, end_date, description }) => {
            return (
              <div>
                <WorkCard
                  key={_id}
                  role={role}
                  company={company}
                  start_date={start_date}
                  end_date={end_date}
                  end={end_date}
                  description={description}
                />
              </div>
            );
          }
        )}
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Work;
