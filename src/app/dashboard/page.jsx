"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Statement from "./Statement";
import PayBills from "./PayBills";
import PayCard from "./PayCard";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Weather from "../api/weather/Weather";
import ProfileImage from "./ProfileImage";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const DashboardPage = () => {
  const { auth } = useContext(AuthContext);
  const { push } = useRouter();
  const [action, setAction] = useState("");
  const [userName, setUserName] = useState("Rebecca");
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (!auth.user) {
      toast.error("You need an account to see the dashboard");
      push("/auth");
    }
  }, [auth]);

  function conditionalRendering(id) {
    if (id === "statetment") {
      setAction("statetment");
    }
    if (id === "paybill") {
      setAction("paybill");
    }
    if (id === "transfer") {
      setAction("transfer");
    }
    if (id === "paycard") {
      setAction("paycard");
    }
    if (id === "deposit") {
      setAction("deposit");
    }
    if (id === "withdraw") {
      setAction("withdraw");
    }
  }

  function handleClick(id) {
    return () => {
      conditionalRendering(id);
    };
  }

  return (
    <>
      {/* <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-bold border-b text-[#f82a35]" : ""
          } py-2 hover:text-[#f82a35] text-lg mt-2 mb-6`}
        >
          {link.label}
        </Link> */}

      <div className="flex mt-[50px] container">
        <section className="flex-2/3 ">
          <section className="flex ">
            <ProfileImage />

            <section>
              <div>
                <p className="text-[#6b7280] bg-red-200">
                  March, 27th 2024 | Partly Cloudy
                </p>
              </div>
              <div>
                <Weather />
              </div>
              <div className="mb-12 font-bold text-3xl">
                <p className="tracking-widest ">
                  Hello, <span className="bg-red-200">{userName}</span>
                </p>
              </div>{" "}
            </section>
          </section>
          <p className="font-bold mb-4 text-[#6b7280]">
            What do you want to do today?
          </p>
          <div className="flex border-2 border-[#6b7280] justify-center mr-24 gap-6 basis-72 shadow shadow-black-500/50 rounded-lg p-8">
            <div>
              <p className="flex justify-center">
                <Image
                  src="/deposit.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="transfer"
                  onClick={handleClick("deposit")}
                />
              </p>
              <p className="text-center mt-2">Deposit</p>
            </div>
            <div>
              <p className="flex justify-center">
                <Image
                  src="/withdraw.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="transfer"
                  onClick={handleClick("withdraw")}
                />
              </p>
              <p className="text-center mt-2">Withdraw</p>
            </div>
            <div>
              <p className="flex justify-center">
                <Image
                  src="/transfer2.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="transfer"
                  onClick={handleClick("transfer")}
                />
              </p>
              <p className="text-center mt-2">Transfer</p>
            </div>
            <div>
              <p className="flex justify-center">
                <Image
                  src="/bill3.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="paybill"
                  onClick={handleClick("paybill")}
                />
              </p>
              <p className="text-center mt-2">Pay Bills</p>
            </div>
            <div>
              <p className="flex justify-center">
                <Image
                  src="/card.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="paycardicon"
                  onClick={handleClick("paycard")}
                />
              </p>
              <p className="text-center mt-2">Pay Card</p>
            </div>
            <div>
              <p className="flex justify-center">
                <Image
                  src="/statement2.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                  id="statetment"
                  onClick={handleClick("statetment")}
                />
              </p>

              <p className="text-center mt-2">Statetment</p>
            </div>
          </div>
          <div className="mr-24">
            {action === "statetment" ? (
              <Statement />
            ) : action === "paybill" ? (
              <PayBills />
            ) : action === "paycard" ? (
              <PayCard />
            ) : action === "transfer" ? (
              <Transfer />
            ) : action === "deposit" ? (
              <Deposit />
            ) : action === "withdraw" ? (
              <Withdraw />
            ) : null}
          </div>
        </section>
        <section className="flex-1/3 ml-6">
          <p className="mb-2 text-2xl text-center text-9 font-bold">
            Your Accounts{" "}
          </p>
          <div className="bg-[#fec53b] mb-4 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-xl mb-3">Checking Account</p>
            <p className="text-2xl ">$ {deposit}</p>
          </div>
          <div className="bg-[#ec552a] text-white mb-8 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-xl mb-3">Savings Account</p>
            <p className="text-2xl ">$ 48,988.20</p>
          </div>
          <hr className="h-px -ml-2 mr-2 my-4 bg-white border-0 "></hr>
          <div>
            <section className="text-center font-bold text-2xl my-4">
              <p className="mb-2 font-bold">Your Tokens</p>
              <div className="flex justify-center items-center">
                <Image src="/educklogo2.png" width={50} height={50} />
                <p className="ml-2">235</p>
              </div>
            </section>

            <hr className="h-px -ml-2 mr-2 my-4 bg-white border-0 "></hr>
            <p className="mb-4 text-center font-bold text-2xl">Your Cards</p>

            {/* // usar grid aqui por causa do overlapping dos numeros ??*/}
            <div className="flex justify-center">
              <div className="mb-[20px] flex flex-col justify-center">
                <Image
                  src="/quackprodebitblank.png"
                  width={300}
                  height={200}
                  className="rounded-xl "
                />
                <div className="text-left -mt-[110px] ">
                  <p className=" text-2xl mt-16 ml-[160px]">$1,765.23</p>
                </div>
              </div>
            </div>
            <div className="mb-[40px] flex justify-center">
              <div>
                <Image
                  src="/quackprocreditblank.png"
                  width={300}
                  height={200}
                  className="rounded-xl"
                />
                <div className="text-left -mt-[110px] flex flex-col">
                  <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px  bg-white border-0 "></hr>
          <p className="mb-4 text-center font-bold text-2xl mt-4">
            Your Linked Cards
          </p>
          <div className="mb-[20px] flex justify-center">
            <div>
              <Image
                src="/quackprocreditblank.png"
                width={300}
                height={200}
                className="rounded-xl"
              />
              <div className="text-left -mt-[110px] flex flex-col">
                <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
              </div>
            </div>
          </div>
          <div className="mb-[40px] flex justify-center">
            <div>
              <Image
                src="/quackprocreditblank.png"
                width={300}
                height={200}
                className="rounded-xl"
              />
              <div className="text-left -mt-[110px] flex flex-col">
                <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardPage;
