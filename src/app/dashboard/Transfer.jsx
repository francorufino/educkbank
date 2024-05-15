import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

const Transfer = () => {
  const {
    accountChecking,
    accountSavings,
    transferToChecking,
    transferToSavings,
  } = useAccountContext();
  const [form, setForm] = useState({
    amount: "",
    fromAccount: "checking",
    toAccount: "savings",
  });

  const handleAmountChange = values => {
    const { value } = values;
    setForm({ ...form, amount: value });
  };

  const handleTransfer = () => {
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount < 0.01) {
      alert("Please enter a valid amount greater than or equal to 0.01.");
      return;
    }

    if (form.fromAccount === form.toAccount) {
      alert("Invalid transfer. Please select different accounts.");
      return;
    }

    if (form.fromAccount === "checking" && form.toAccount === "savings") {
      if (amount <= accountChecking) {
        transferToSavings(amount);
        setForm({ ...form, amount: "" });
      } else {
        alert("Insufficient funds in the checking account.");
      }
    } else if (
      form.fromAccount === "savings" &&
      form.toAccount === "checking"
    ) {
      if (amount <= accountSavings) {
        transferToChecking(amount);
        setForm({ ...form, amount: "" });
      } else {
        alert("Insufficient funds in the savings account.");
      }
    }
  };

  return (
    <>
      <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg">
        <section className="flex flex-col pt-8 mx-8 justify-center basis-72">
          <section className="flex justify-between">
            <p className="mb-2 text-xl font-bold text-morange">Transfer</p>
            <Image
              src="/transfer.png"
              alt="transfer icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="transfer"
            />
          </section>
          <label>
            Amount you want to transfer:
            <CurrencyFormat
              thousandSeparator={true}
              prefix={"$"}
              placeholder="0.00" // Placeholder text
              value={form.amount}
              onValueChange={handleAmountChange}
              className="pl-2 m-2 rounded-md focus:outline-morange"
              autoComplete="off" // Disable autocomplete
            />
          </label>
          <p>From:</p>
          <div className="flex items-center mb-2">
            <input
              className="accent-morange"
              type="radio"
              id="fromChecking"
              name="fromAccount"
              value="checking"
              checked={form.fromAccount === "checking"}
              onChange={e => setForm({ ...form, fromAccount: e.target.value })}
            />
            <label htmlFor="fromChecking" className="ml-2 mr-4">
              Checking
            </label>
            <input
              className="accent-morange"
              type="radio"
              id="fromSavings"
              name="fromAccount"
              value="savings"
              checked={form.fromAccount === "savings"}
              onChange={e => setForm({ ...form, fromAccount: e.target.value })}
            />
            <label htmlFor="fromSavings" className="ml-2">
              Savings
            </label>
          </div>
          <p>To:</p>
          <div className="flex items-center mb-2">
            <input
              className="accent-morange"
              type="radio"
              id="toChecking"
              name="toAccount"
              value="checking"
              checked={form.toAccount === "checking"}
              onChange={e => setForm({ ...form, toAccount: e.target.value })}
            />
            <label htmlFor="toChecking" className="ml-2 mr-4">
              Checking
            </label>
            <input
              className="accent-morange"
              type="radio"
              id="toSavings"
              name="toAccount"
              value="savings"
              checked={form.toAccount === "savings"}
              onChange={e => setForm({ ...form, toAccount: e.target.value })}
            />
            <label htmlFor="toSavings" className="ml-2">
              Savings
            </label>
          </div>
        </section>
        <section className="flex justify-center mt-4">
          <Button onClick={handleTransfer} className="mb-8">
            Transfer
          </Button>
        </section>
      </section>
    </>
  );
};

export default Transfer;
