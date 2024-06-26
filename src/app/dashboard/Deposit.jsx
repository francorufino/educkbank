import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";

const Deposit = () => {
  const { depositChecking, depositSavings } = useAccountContext();
  const [form, setForm] = useState({
    amount: "",
    accountType: "checking",
  });

  const handleAmountChange = e => {
    let newAmount = e.target.value;

    // Replace commas with periods for decimal separators
    newAmount = newAmount.replace(/,/g, ".");

    // Ensure the number of decimal places is limited to 2
    const decimalIndex = newAmount.indexOf(".");
    if (decimalIndex !== -1 && newAmount.length - decimalIndex > 3) {
      newAmount = newAmount.slice(0, decimalIndex + 3);
    }

    if (!isNaN(newAmount) && parseFloat(newAmount) >= 0.01) {
      setForm({ ...form, amount: newAmount });
    } else if (newAmount === "0") {
      setForm({ ...form, amount: "0." });
    } else {
      setForm({ ...form, amount: newAmount });
    }

    if (parseFloat(newAmount) < 1000000.0) {
      setForm({ ...form, amount: newAmount });
    } else {
      setForm({ ...form, amount: "" });
      alert("O limite máximo de depósito é $999,999.99");
    }
  };

  const handleDeposit = () => {
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount < 0.01) {
      console.log(amount);
      alert("Please enter a valid amount greater than or equal to 0.01.");
      return;
    }

    if (form.accountType === "checking") {
      console.log(amount);
      depositChecking(amount);
    } else {
      depositSavings(amount);
    }

    setForm({ ...form, amount: "" });
  };

  return (
    <>
      <section className="mt-8 border-2  border-dgray shadow shadow-black-500/50 rounded-lg ">
        <section className="flex flex-col pt-8 mx-8 justify-center basis-72 ">
          <section className="flex justify-between">
            <p className="mb-2 text-xl font-bold text-morange">Deposit*</p>
            <Image
              src="/deposit.png"
              alt="deposit icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="deposit"
            />
          </section>
          <label>
            Amount you want to deposit:
            <input
              type="number"
              min="0.01"
              max="999999.99"
              step="any"
              className="pl-2 m-2 rounded-md focus:outline-morange no-spinner"
              placeholder="0.00"
              value={form.amount}
              onChange={handleAmountChange}
              autoComplete="off"
            />
          </label>
          <p>Where do you want to deposit?</p>
          <section className="flex items-center mb-2">
            <input
              className="accent-morange"
              type="radio"
              id="checking"
              name="accountType"
              value="checking"
              checked={form.accountType === "checking"}
              onChange={e => {
                setForm({ ...form, accountType: e.target.value });
              }}
            />
            <label htmlFor="checking" className="ml-2 mr-4">
              Checking
            </label>
            <input
              className="accent-morange"
              type="radio"
              id="savings"
              name="accountType"
              value="savings"
              checked={form.accountType === "savings"}
              onChange={e => {
                setForm({ ...form, accountType: e.target.value });
              }}
            />
            <label htmlFor="savings" className="ml-2">
              Savings
            </label>
          </section>
        </section>{" "}
        <section className="flex justify-center mt-4">
          <Button onClick={handleDeposit} className="mb-8">
            Deposit
          </Button>
        </section>
        <p className="text-center mb-1 mr-2 text-xs font-bold text-morange">
          *this transaction is only for demonstration of the system, a real
          deposit should be done in a physical bank
        </p>
      </section>
    </>
  );
};

export default Deposit;
