import { BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import langColors from "../../utils/langColor";

const RepoCard = ({ repo }) => {
  return (
    <Link
      href={repo.html_url}
      target="_blank"
      className="flex flex-col w-full md:w-72 border justify-between m-2 border-blue-500 text-white rounded-sm p-4 "
    >
      <div className="flex flex-row items-center h-fit">
        <BookmarkIcon className="w-4 h-4 mr-3" />
        <h1 className="text-white text-lg">{repo.name}</h1>
      </div>
      <div className="mt-2 h-fit flex flex-col">
        <p className="text-xs text-gray-500">{repo.description}</p>
      </div>
      <div className="flex flex-row justify-between mt-5 relative bottom-1">
        <div className="flex flex-row items-center ">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: langColors[repo.language] }}
          />
          <p className="text-xs text-white">{repo.language}</p>
        </div>
        <p className="text-xs text-white">{repo.size}KB</p>
      </div>
    </Link>
  );
};

export default RepoCard;
