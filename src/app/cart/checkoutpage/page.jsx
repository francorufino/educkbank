"use client";
import React, { useState } from "react";
import Head from "next/head";
import CartPageProductListCheckout from "../CartPageProductListCheckout";

const CheckoutPage = () => {
  const [total, setTotal] = useState(100); // Set default total
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingOption, setShippingOption] = useState("");
  const [shippingCost, setShippingCost] = useState(0); // Default shipping cost

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
    <div>
      <Head>
        <title>Review Your Order</title>
        <meta
          name="description"
          content="Review your order before placing it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Review Your Order</h1>

      <section>
        <CartPageProductListCheckout />
      </section>

      <div>
        <h2>Total: ${total + shippingCost}</h2>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="tokens"
              checked={paymentMethod === "tokens"}
              onChange={handlePaymentMethodChange}
            />
            Pay with Tokens
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="debit-card"
              checked={paymentMethod === "debit-card"}
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
        </div>
      </div>

      <div>
        <h2>Shipping Address</h2>
        <p>User Name: John Doe</p>
        {/* Display address here */}
      </div>

      <div>
        <h2>Shipping Options</h2>
        <label>
          <input
            type="radio"
            name="shippingOption"
            value="express"
            checked={shippingOption === "express"}
            onChange={handleShippingOptionChange}
          />
          Express Shipping (+$5)
        </label>
        <label>
          <input
            type="radio"
            name="shippingOption"
            value="standard"
            checked={shippingOption === "standard"}
            onChange={handleShippingOptionChange}
          />
          Standard Shipping (3 to 5 business days)
        </label>
        <label>
          <input
            type="radio"
            name="shippingOption"
            value="members"
            checked={shippingOption === "members"}
            onChange={handleShippingOptionChange}
          />
          Members Shipping (Free)
        </label>
      </div>

      <button onClick={handlePlaceOrder}>Place Your Order</button>
    </div>
  );
};

export default CheckoutPage;
