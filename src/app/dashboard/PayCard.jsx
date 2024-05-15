import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

const PayCard = () => {
  const { accountChecking, accountSavings, payBill } = useAccountContext();
  const [form, setForm] = useState({
    amount: "",
  });

  const handleAmountChange = values => {
    const { value } = values;
    setForm({ ...form, amount: value });
  };

  const handlePayCard = () => {
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    if (amount <= accountChecking || amount <= accountSavings) {
      payBill(amount, "Credit Card", "Your Credit Card Provider");
      setForm({ ...form, amount: "" });
      alert("Credit card payment successful.");
    } else {
      alert("Insufficient funds in the checking and savings accounts.");
    }
  };

  return (
    <>
      <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg">
        <section className="flex flex-col pt-8 mx-8 justify-center basis-72">
          <section className="flex justify-between">
            <p className="mb-2 text-xl font-bold text-morange">
              Pay Credit Card
            </p>
            <Image
              src="/card.png"
              alt="pay card icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="paycard"
            />
          </section>
          <label>
            Amount:
            <CurrencyFormat
              thousandSeparator={true}
              prefix={"$"}
              placeholder="0.00"
              value={form.amount}
              onValueChange={handleAmountChange}
              className="pl-2 m-2 rounded-md focus:outline-morange"
              autoComplete="off"
            />
          </label>
        </section>
        <section className="flex justify-center mt-4">
          <Button onClick={handlePayCard} className="mb-8">
            Pay Card
          </Button>
        </section>
      </section>
    </>
  );
};

export default PayCard;
