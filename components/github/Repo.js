import React from "react";
import RepoCard from "./RepoCard";

const Repo = () => {
  return (
    <div className="text-left mt-10 ">
      <h1 className="text-lg underline-offset-[15px] decoration-gray-500 underline tracking-widest decoration-dashed ">
        Your Repo
      </h1>
      <div>
        <RepoCard />
      </div>
    </div>
  );
};

export default Repo;
