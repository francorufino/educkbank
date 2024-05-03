"use client";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import CartPageProductListCheckout from "../CartPageProductListCheckout";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const { push } = useRouter();
  const { cart, auth } = useContext(AuthContext);
  const [total, setTotal] = useState(100); // Set default total
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingOption, setShippingOption] = useState("");
  const [shippingCost, setShippingCost] = useState(0); // Default shipping cost

  useEffect(() => {
    if (!auth.user) {
      push("/auth");
      toast.error("You need a session to checkout your order");
    }
  }, [auth]);

  const handlePaymentMethodChange = e => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingOptionChange = e => {
    const option = e.target.value;
    setShippingOption(option);

    // Update total based on shipping option
    if (option === "express") {
      setShippingCost(5);
    } else if (option === "standard") {
      setShippingCost(0); // No additional cost for standard shipping
    } else if (option === "members") {
      setShippingCost(0); // Free shipping for members
    }
  };

  const handlePlaceOrder = () => {
    // Logic to place order goes here
    console.log("Order placed!");
  };

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
        <div className="flex gap-10 bg-white p-6 rounded-xl mt-4">
          {cart?.length > 0 && (
            <article className="flex flex-1 flex-col gap-4">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    name="full_name"
                    id="full_name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    name="address"
                    id="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    name="country"
                    id="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </article>
          )}
          <article className="flex flex-col flex-1">
            <CartPageProductListCheckout />
          </article>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
