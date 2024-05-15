import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

const Withdraw = () => {
  const { withdrawChecking, withdrawSavings } = useAccountContext();
  const [form, setForm] = useState({
    amount: "",
    accountType: "checking",
  });

  const handleAmountChange = values => {
    const { value } = values;
    setForm({ ...form, amount: value });
  };

  const handleWithdraw = () => {
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount < 0.01) {
      alert("Please enter a valid amount greater than or equal to 0.01.");
      return;
    }

    let success = false;
    if (form.accountType === "checking") {
      success = withdrawChecking(amount);
    } else {
      success = withdrawSavings(amount);
    }

    if (success) {
      setForm({ ...form, amount: "" }); // Reset to empty string
    } else {
      alert("Insufficient funds.");
    }
  };

  return (
    <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg ">
      <section className="flex flex-col pt-8 mx-8 justify-center basis-72 ">
        <section className="flex justify-between">
          <p className="mb-2 text-xl font-bold text-morange">Withdraw*</p>
          <Image
            src="/withdraw.png"
            alt="withdraw icon"
            width={50}
            height={50}
            className="text-center ml-5 mr-5"
            id="withdraw"
          />
        </section>
        <label>
          Amount you want to withdraw:
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
        <p>Where do you want to withdraw from?</p>
        <div className="flex items-center mb-2">
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
        </div>
      </section>{" "}
      <section className="flex justify-center mt-4">
        <Button onClick={handleWithdraw} className="mb-8">
          Withdraw
        </Button>
      </section>
      <p className="text-center mb-1 mr-2 text-xs font-bold text-morange">
        *this transaction is only for demonstration of the system, a real
        withdrawal should be done in a physical bank
      </p>
    </section>
  );
};

export default Withdraw;
