"use client";
import React from "react";
import { useState } from "react";

const Deposit = () => {
  const [form, setForm] = useState({
    amount: 0.0
  });

  return (
    <>
      <p className="mt-12 mb-6 font-bold">Deposit</p>
      <label>
        Amount you want to deposit:
        <input
          className="pl-2 m-2"
          value={form.amount}
          onChange={(e) => {
            setForm({
              ...form,
              amount: e.target.value
            });
          }}
        />
      </label>
      <p>Where do you want to deposit?</p>
      <p>checking</p>
      <p>savings</p>

      <p>{form.amount}</p>
      <button onClick={() => alert("Deposited!")}>Deposit</button>
    </>
  );
};

export default Deposit;
