import { ChevronRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col md:flex-row  border border-blue-500 p-5 rounded-md">
      <div className="text-left">
        <div>
          <div className="bg-blue-500 w-fit p-1 rounded-md my-2 text-[#0a0d14]">
            <CodeBracketIcon className="w-5 h-5 " />
          </div>
          <h1 className="text-xl font-bold">Province of Cambodia data</h1>
        </div>

        <p className="text-sm py-3">
          This is a Scrapping data of all provinces in Cambodia which include
          some data such as ISO , Capital, District.
        </p>

        <Link
          href="/"
          className="flex justify-left items-center hover:border hover:bg-transparent hover:text-white hover:border-blue-500 w-fit rounded-md px-3 py-1 bg-blue-500 text-[#0a0d14]"
        >
          <a>
            <p className="text-sm ">View Project</p>
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </Link>
      </div>
      <div className="mt-3 md:mt-0 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-db-7ef53.appspot.com/o/projects%2Fb8uj4o5lrHmebih3mwmH%2Fimage?alt=media&token=c5d3517c-5581-4f8b-8fd6-47c673a4f25d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
