import React from "react";
import GithubProfile from "./github/GithubProfile";
import Repo from "./github/Repo";

const Github = ({ profile }) => {
  return (
    <div>
      <GithubProfile profile={profile} />
      {/* <Repo repos={repos} /> */}
    </div>
  );
};

export default Github;
