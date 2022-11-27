import { ChevronRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

const Project = ({ projects }) => {
  return (
    <>
      {projects.project.map(({ _id, name, description, url, image }) => (
        <div className="flex flex-col md:flex-row  border border-blue-500 p-5 rounded-md">
          <div className="text-left">
            <div>
              <div className="bg-blue-500 w-fit p-1 rounded-md my-2 text-[#0a0d14]">
                <CodeBracketIcon className="w-5 h-5 " />
              </div>
              <h1 className="text-xl font-bold">{name}</h1>
            </div>

            <p className="text-sm py-3 text-gray-400">{description}</p>

            <Link
              href={url ? url : "/project"}
              className="flex justify-left items-center hover:border hover:bg-transparent hover:text-white hover:border-blue-500 w-fit rounded-md px-3 py-1 bg-blue-500 text-[#0a0d14]"
            >
              <p className="text-sm ">View Project</p>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-3 md:mt-0 ">
            <img src={urlFor(image).url()} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
