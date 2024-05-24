/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button/Button";

const ThanksPage = () => {
  const { push } = useRouter();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log({ auth });
    if (!auth.isLoggedIn) {
      push("/auth");
    }
  }, [auth]);

  function goToDashboard() {
    alert("clicou");
    if (auth.isLoggedIn) {
      push("/dashboard");
    }
  }

  return (
    <>
      <h1 className="text-2xl mt-8 text-black font-semibold">
        Hello <span>{auth?.metadata?.first_name},</span>
      </h1>
      <section className="flex flex-col items-center ">
        <section className="flex mt-8">
          <section>
            <section className="flex justify-center ">
              <p>
                <Image
                  src="/icons8-check-mark-100.png"
                  alt="check icon"
                  width={50}
                  height={50}
                />
              </p>
            </section>
            <h1 className="text-dgray font-bold mt-4">
              Your order was successfully placed!
            </h1>
            <br />
            <h1>Thank you for shopping at Educk Store!</h1>
            <h1 className="mt-4">You made a difference in someone's life!</h1>
            <h2>We hope to see you again soon!</h2>
          </section>
          <section className="pl-8 ml-8 border-l-2 border-white">
            {" "}
            <section className="flex justify-center border-b-2 border-white">
              <p>
                <Image
                  src="/icons8-truck-100.png"
                  alt="truck icon"
                  width={50}
                  height={50}
                />
              </p>
            </section>
            <h1 className="my-4 font-bold">
              Here is where we will deliver your Order:
            </h1>{" "}
            <section className="flex items-center">
              <section>
                {" "}
                <h2 className="font-semibold">Shipped to:</h2>
                <p>
                  <span>
                    {auth?.metadata?.first_name} {auth?.metadata?.last_name}
                  </span>
                </p>
                <p>
                  <span>{auth?.metadata?.address}</span>
                </p>
                <p>
                  <span>{auth?.metadata?.city}</span>
                </p>
                <p>
                  <span>{auth?.metadata?.country}</span>
                </p>
                <p>
                  <span>{auth?.metadata?.zip_code}</span>
                </p>
              </section>
            </section>
          </section>
        </section>{" "}
        <Button onClick={goToDashboard} className="mt-12">
          Go to dashboard
        </Button>
      </section>
    </>
  );
};

export default ThanksPage;
