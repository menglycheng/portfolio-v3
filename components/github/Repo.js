import React from "react";
import RepoCard from "./RepoCard";

const Repo = ({ repos }) => {
  return (
    <div className="text-left mt-10 ">
      <h1 className="text-lg underline-offset-[15px] decoration-gray-500 underline tracking-widest decoration-dashed ">
        Your Repo
      </h1>
      <div className="mt-6 flex flex-row flex-wrap items-stretch">
        {repos.map((repo) => (
          <RepoCard repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repo;
