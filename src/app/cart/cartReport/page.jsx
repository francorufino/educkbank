"use client";
import React from "react";
import OrderReport from "../OrderReport";
import Link from "next/link";
import Button from "@/components/button/Button";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";

const page = () => {
  const { clearCart } = useContext(CartContext);
  return (
    <section>
      <h1>
        Hello, <span className="bg-red-200">Rebecca,</span>
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
      <h1>Here is Order Confirmation:</h1>

      <br />
      <h2>Shipped to:</h2>
      <p>
        <span className="bg-red-200">Rebecca Williams</span>
      </p>
      <p>
        <span className="bg-red-200">123 Margareth Street</span>
      </p>
      <p>
        <span className="bg-red-200">Cindy City </span>
      </p>
      <p>
        <span className="bg-red-200">Albany, USA</span>
      </p>
      <p>
        <span className="bg-red-200">Zipcode: 123456</span>
      </p>
      <OrderReport />
      <div className="flex justify-center mt-8 mb-4">
        <Link href="/">
          <Button onClick={clearCart}>OK</Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
