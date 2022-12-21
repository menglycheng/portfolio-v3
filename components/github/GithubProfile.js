import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import Moment from "react-moment";

const GithubProfile = ({ profile }) => {
  console.log(profile);
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={profile.avatar_url}
        alt="github profile"
        className="rounded-full w-32"
      />
      <div>
        <h1 className="text-white mt-3 font-bold text-lg">
          {profile.name.replace("_", " ")}
        </h1>
        <p>@{profile.login}</p>

        <div className="flex flex-row mt-4 text-white items-center justify-center flex-wrap">
          <div className="border border-blue-500 uppercase text-sm w-28 m-1 py-1 rounded-md">
            <p className="text-lg font-bold">{profile.public_repos}</p>
            <p className="text-xs mt-1">Repositories</p>
          </div>
          <div className="border border-blue-500 w-28 m-1 uppercase   py-1 rounded-md">
            <p className="text-lg font-bold">{profile.followers}</p>
            <p className="text-xs mt-1">Followers</p>
          </div>
          <div className="border border-blue-500 w-28 m-1 py-1 uppercase text-sm rounded-md">
            <p className="text-lg font-bold">{profile.following}</p>
            <p className="text-xs mt-1">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
