import React, { useState } from "react";
import Button from "@/components/button/Button";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

const PayBills = () => {
  const { accountChecking, payBill } = useAccountContext();
  const [form, setForm] = useState({
    amount: "",
    billType: "Cable",
    provider: "Comcast",
  });

  const providers = {
    Cable: ["Comcast", "Spectrum", "Cox"],
    Internet: ["AT&T", "Verizon", "Xfinity"],
    Phone: ["Verizon", "T-Mobile", "AT&T"],
    Electricity: ["PG&E", "Con Edison", "Duke Energy"],
    Water: ["American Water", "Aqua America", "Suez"],
    Gas: ["Southern California Gas", "National Grid", "Con Edison"],
    Trash: ["Waste Management", "Republic Services", "Waste Connections"],
    Rent: ["Apartment Rent", "House Rent", "Office Rent"],
    CarInsurance: ["Geico", "State Farm", "Progressive", "Allstate"],
  };

  const handleAmountChange = values => {
    const { value } = values;
    setForm({ ...form, amount: value });
  };

  const handlePayBill = () => {
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount < 0.01) {
      alert("Please enter a valid amount greater than or equal to 0.01.");
      return;
    }

    if (amount <= accountChecking) {
      payBill(amount);
      setForm({ ...form, amount: "" });
      alert("Bill paid successfully.");
    } else {
      alert("Insufficient funds in the checking account.");
    }
  };

  const handleBillTypeChange = e => {
    setForm({
      ...form,
      billType: e.target.value,
      provider: providers[e.target.value][0],
    });
  };

  const handleProviderChange = e => {
    setForm({ ...form, provider: e.target.value });
  };

  return (
    <>
      <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg">
        <section className="flex flex-col pt-8 mx-8 justify-center basis-72">
          <section className="flex justify-between">
            <p className="mb-2 text-xl font-bold text-morange">Pay Bills*</p>
            <Image
              src="/paybills.png"
              alt="pay bills icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="paybills"
            />
          </section>
          <label>
            Bill Type:
            <select
              className="pl-2 m-2 rounded-md focus:outline-morange"
              value={form.billType}
              onChange={handleBillTypeChange}
            >
              {Object.keys(providers).map(billType => (
                <option key={billType} value={billType}>
                  {billType}
                </option>
              ))}
            </select>
          </label>
          <label>
            Provider:
            <select
              className="pl-2 m-2 rounded-md focus:outline-morange"
              value={form.provider}
              onChange={handleProviderChange}
            >
              {providers[form.billType].map(provider => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </label>
          <label>
            Amount:
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
        </section>
        <section className="flex justify-center mt-4">
          <Button onClick={handlePayBill} className="mb-8">
            Pay Bill
          </Button>
        </section>
        <p className="text-center mb-1 mr-2 text-xs font-bold text-morange">
          *this transaction is only for demonstration of the system, a real
          payment should be done in a physical bank
        </p>
      </section>
    </>
  );
};

export default PayBills;
