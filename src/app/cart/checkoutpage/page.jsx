"use client";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import CartPageProductListCheckout from "../CartPageProductListCheckout";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import toast from "react-hot-toast";
import { CartContext } from "@/app/context/CartContext";

const CheckoutPage = () => {
  const { push } = useRouter();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth.user) {
      push("/auth");
      toast.error("You need a session to checkout your order");
    }
  }, [auth]);

  return (
    <main>
      <Head>
        <title>Review Your Order</title>
        <meta
          name="description"
          content="Review your order before placing it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col">
        <h1 className="text-xl font-bold">Review Your Order</h1>
        <section className="flex gap-10 bg-white p-6 rounded-xl mt-4">
          <article className="flex flex-col flex-1">
            <CartPageProductListCheckout />
          </article>
        </section>
      </section>
    </main>
  );
};

export default CheckoutPage;
