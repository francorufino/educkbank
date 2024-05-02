"use client";
import LoginComp from "@/components/forms/LoginComp";
import Register from "@/components/forms/Register";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl mt-8">
        Hello there, we are very happy to see you here!
      </h1>
      <h1 className="text-2xl mt-2">Let's get you started!</h1>

      <div className="flex flex-wrap justify-center mt-12 mb-8">
        <div className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Log in</p>
          <LoginComp />
        </div>
        <div className="justify-center flex mt-[200px]">
          <p className="font-bold mx-12">OR</p>
        </div>
        <div className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Sign up</p>
          <Register />
        </div>
      </div>
    </>
  );
};

export default page;
