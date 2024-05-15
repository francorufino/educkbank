"use client";
import React, { createContext, useContext, useState } from "react";

export const AccountContext = createContext();
export const useAccountContext = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
  const [accountChecking, setAccountChecking] = useState(0);
  const [accountSavings, setAccountSavings] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const logTransaction = (amount, type, description, account) => {
    const date = new Date().toLocaleDateString(); // get the current date
    setTransactions(prev => [
      ...prev,
      {
        amount,
        type,
        description, // Make sure description is provided
        date,
        account,
      },
    ]);
  };

  const depositChecking = amount => {
    setAccountChecking(prev => prev + amount);
    logTransaction(amount, "credit", "Deposit to Checking", "Checking");
  };

  const depositSavings = amount => {
    setAccountSavings(prev => prev + amount);
    logTransaction(amount, "credit", "Deposit to Savings", "Savings");
  };

  const withdrawChecking = amount => {
    if (amount <= accountChecking) {
      setAccountChecking(prev => prev - amount);
      logTransaction(amount, "debit", "Withdrawal from Checking", "Checking");
      return true;
    } else {
      return false;
    }
  };

  const withdrawSavings = amount => {
    if (amount <= accountSavings) {
      setAccountSavings(prev => prev - amount);
      logTransaction(amount, "debit", "Withdrawal from Savings", "Savings");
      return true;
    } else {
      return false;
    }
  };

  const transferToChecking = amount => {
    setAccountChecking(prev => prev + amount);
    setAccountSavings(prev => prev - amount);
    logTransaction(amount, "transfer", "Transfer to Checking", "Savings");
  };

  const transferToSavings = amount => {
    setAccountSavings(prev => prev + amount);
    setAccountChecking(prev => prev - amount);
    logTransaction(amount, "transfer", "Transfer to Savings", "Checking");
  };

  const payBill = (amount, billType, provider) => {
    setAccountChecking(prev => prev - amount);
    logTransaction(amount, "debit", `${provider} ${billType}`, "Checking");
  };

  return (
    <AccountContext.Provider
      value={{
        accountChecking,
        accountSavings,
        depositChecking,
        depositSavings,
        withdrawChecking,
        withdrawSavings,
        transferToChecking,
        transferToSavings,
        payBill,
        transactions,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

// membership type
// credit card type
// credit card balance
// debit card type
// debit card balance
// linked Cards
// token earned
// checking Accounts
// saving Accounts
