import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfileImage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className="mr-4">
      <section className="flex space-x-2">
        {/* <section class="relative w-16 h-16">
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <section className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></section>
        </section> */}

        <section className="relative w-24 h-24">
          <section className="flex items-center justify-center text-3xl text-black font-bold bg-myellow rounded-full w-full h-full">
            {auth.metadata.first_name[0]}
          </section>
          <section className="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-green-400 z-2"></section>
        </section>
      </section>
    </section>
  );
};

export default ProfileImage;
