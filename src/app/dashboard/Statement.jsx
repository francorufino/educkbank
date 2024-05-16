import React from "react";
import { useAccountContext } from "../context/AccountContext";
import Image from "next/image";
import depositIcon from "/public/deposit.png";
import withdrawIcon from "/public/withdraw.png";
import transferIcon from "/public/transfer.png";
import payBillsIcon from "/public/paybills.png";
import payCardIcon from "/public/card.png";
import statementIcon from "/public/statement2.png";
import educkLogoIcon from "/public/educklogo2.png";

const Statement = () => {
  const { transactions } = useAccountContext();

  return (
    <>
      <section className="mt-8 border-2 border-dgray shadow shadow-black-500/50 rounded-lg">
        <section className="flex mb-4 flex-col pt-8 mx-8 justify-center basis-72">
          <section className="flex mb-8 justify-between">
            <p className=" text-xl flex items-center font-bold text-morange">
              Recent Transactions
            </p>
            <Image
              src={statementIcon}
              alt="statement icon"
              width={50}
              height={50}
              className="text-center ml-5 mr-5"
              id="statement"
            />
          </section>
          <section>
            {!transactions || transactions.length === 0 ? (
              <p className="text-center mb-12">No transactions yet</p>
            ) : (
              transactions.map((transaction, index) => (
                <section
                  key={index}
                  className="flex mb-4 justify-between gap-6"
                >
                  <section className="flex gap-6">
                    <p className="flex items-center">
                      <Image
                        src={
                          transaction.type === "deposit"
                            ? depositIcon
                            : transaction.type === "withdraw"
                            ? withdrawIcon
                            : transaction.type === "transfer"
                            ? transferIcon
                            : transaction.type === "paybill"
                            ? payBillsIcon
                            : transaction.type === "paycard"
                            ? payCardIcon
                            : educkLogoIcon
                        }
                        alt="transaction icon"
                        width={25}
                        height={25}
                      />
                    </p>
                    <section>
                      <p>{transaction.description}</p>
                      <p className="text-xs text-dgray">{transaction.date}</p>
                    </section>
                  </section>
                  <section className="flex gap-6">
                    <section>
                      <p>
                        {transaction.type === "debit" ? "-" : "+"}
                        {transaction.amount.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </section>
                    <section>
                      <p>Complete</p>
                    </section>
                  </section>
                </section>
              ))
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Statement;
