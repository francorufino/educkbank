/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const ThanksPage = () => {
  const { push } = useRouter();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log({ auth });
    if (!auth.isLoggedIn) {
      push("/auth");
    }
  }, [auth]);

  return (
    <section>
      <h1>
        Hello, <span>{auth?.metadata?.first_name},</span>
        <br />
        <br />
      </h1>
      <h1>Your order was successfully placed!</h1>
      <br />
      <h1>Thank you for shopping at Educk Store!</h1>
      <h1>You made a difference in someone's life!</h1>
      <h2>We hope to see you again soon!</h2>
      <h3>Educk Store Team</h3>
      <br />
      <h1>Here is where we will deliver your Order:</h1>

      <br />
      <h2>Shipped to:</h2>
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
        <span>Zipcode: {auth?.metadata?.zip_code}</span>
      </p>
    </section>
  );
};

export default ThanksPage;
