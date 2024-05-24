/* eslint-disable react/no-unescaped-entities */
"use client";
import { AuthContext } from "@/app/context/AuthContext";
import LoginComp from "@/components/forms/LoginComp";
import Register from "@/components/forms/Register";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const RegisterPage = () => {
  const { auth } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    if (auth.user) {
      push("/educkstore");
    }
  }, [auth]);

  return (
    <>
      <h1 className="text-3xl  mt-8">
        Hello there, we are very happy to see you here!
      </h1>
      <h1 className="text-3xl mt-2 ">Let's get you started!</h1>

      <section className="flex flex-wrap justify-center mt-12 mb-8">
        <section className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Log in</p>
          <LoginComp />
        </section>
        <section className="justify-center flex mt-[200px]">
          <p className="font-bold mx-12">OR</p>
        </section>
        <section className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Sign up</p>
          <Register />
        </section>
      </section>
    </>
  );
};

export default RegisterPage;
