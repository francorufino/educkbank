import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfileImage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className="mr-4">
      <div className="flex space-x-2">
        {/* <div class="relative w-16 h-16">
          <img
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div> */}

        <div className="relative w-24 h-24">
          <div className="flex items-center justify-center text-3xl font-bold bg-[#fec53b] rounded-full w-full h-full">
            {auth.metadata.first_name[0]}
          </div>
          <div className="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImage;
