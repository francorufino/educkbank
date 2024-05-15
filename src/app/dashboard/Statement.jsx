import React from "react";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";

const Statement = () => {
  const { transactions } = useAccountContext();

  // Function to get the appropriate image based on transaction type
  const getTransactionImage = type => {
    switch (type) {
      case "deposit":
        return "/deposit.png";
      case "withdraw":
        return "/withdraw.png";
      case "transfer":
        return "/transfer2.png";
      case "paybill":
        return "/paybills.png";
      case "paycard":
        return "/card.png";
      case "statement":
        return "/statement2.png";
      default:
        return "/educklogo2.png";
    }
  };

  return (
    <>
      <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg">
        <section className="flex mb-4 flex-col pt-8 mx-8 justify-center basis-72">
          <section className="flex mb-8 justify-between">
            <p className=" text-xl flex items-center font-bold text-morange">
              Recent Transactions
            </p>
            <Image
              src="/statement2.png"
              alt="statement icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="statement"
            />
          </section>
          <div>
            {!transactions || transactions.length === 0 ? (
              <p>No transactions yet.</p>
            ) : (
              transactions.map((transaction, index) => (
                <div key={index} className="flex mb-4 justify-between gap-6">
                  <div className="flex gap-6">
                    <p className="flex items-center">
                      <Image
                        src={getTransactionImage(transaction.type)}
                        alt="transaction icon"
                        width={25}
                        height={25}
                      />
                    </p>
                    <div>
                      <p>{transaction.description}</p>
                      <p className="text-xs text-dgray">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p>
                        {transaction.type === "debit" ? "-" : "+"}$
                        {transaction.amount.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p>Complete</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Statement;
