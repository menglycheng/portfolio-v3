import { ChevronRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { urlFor } from "../sanity";

const Project = ({ projects }) => {
  return (
    <>
      {projects.project.map(
        ({ _id, name, description, url, image, codeUrl }) => (
          <div className="flex flex-col md:flex-row  border border-blue-500 p-5 rounded-md my-">
            <div className="text-left md:w-[800px] w-full mr-5 ">
              <div className="">
                <div className="bg-blue-500 w-fit p-1 rounded-md my-2 text-[#0a0d14]">
                  <CodeBracketIcon className="w-5 h-5 " />
                </div>
                <h1 className="text-xl font-bold">{name}</h1>
              </div>

              <p className="text-sm py-3 text-gray-400">{description}</p>
              <div className="flex flex-row items-center">
                <Link
                  href={url ? url : "/project"}
                  className="flex justify-left mt-4 items-center hover:border hover:bg-transparent hover:text-white hover:border-blue-500 w-fit rounded-md px-3 py-1 bg-blue-500 text-[#0a0d14]"
                >
                  <p className="text-sm ">View Project</p>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link href={codeUrl ? codeUrl : "/project"}>
                  <BsGithub className="w-6 h-6 mt-4 ml-4 hover:text-blue-500 cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="mt-3 md:mt-0 md:w-[1000px] flex items-center justify-center">
              <img src={urlFor(image).url()} alt="" className="rounded-md" />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Project;
