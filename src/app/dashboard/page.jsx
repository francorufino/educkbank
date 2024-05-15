"use client";
import React, { useContext, useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase/config";
import { getDocs, query, where, collection } from "firebase/firestore";
import Button from "@/components/button/Button";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Statement from "./Statement";
import PayBills from "./PayBills";
import PayCard from "./PayCard";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Weather from "./Weather";
import { useAccountContext } from "../context/AccountContext";

const DashboardPage = () => {
  const [action, setAction] = useState("");
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { auth, loading } = useContext(AuthContext);
  const { push } = useRouter();
  const { accountChecking, accountSavings } = useAccountContext();

  // function coinFlip() {
  //   Math.random() < 0.5 ? setTokens(tokens - 1) : setTokens(tokens + 1);
  // }

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

  useEffect(() => {
    if (!auth.user && !loading) {
      toast.error("You need an account to see the dashboard");
      push("/auth");
    }
  }, [auth, loading]);

  useEffect(() => {
    if (auth.user) {
      getOrders();
    }
  }, [auth]);

  if (!auth.user) {
    return <p>Loading...</p>;
  }

  async function getOrders() {
    const q = query(
      collection(db, "orders"),
      where("user.id", "==", auth.user.uid)
    );

    const querySnapshot = await getDocs(q);
    const parseOrders = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));

    setOrders(parseOrders);
  }

  function calculateTotalSpentFromMultipleOrders(orders) {
    let grandTotalSpent = 0;

    // Iterate over each order in the array of orders
    orders.forEach(order => {
      let totalSpentForOrder = 0;

      // Iterate over each product in the current order
      order.products.forEach(product => {
        totalSpentForOrder += product.quantity * product.price;
      });

      // Add the total spent for the current order to the grand total
      grandTotalSpent += totalSpentForOrder;
    });

    return grandTotalSpent;
  }

  function showOrderDetail(order) {
    setSelectedOrder(order);
    setOpenModal(true);
  }

  function closeOrderDetail() {
    setSelectedOrder(null);
    setOpenModal(false);
  }

  return (
    <>
      <div className="flex mt-[50px] container">
        <section className="flex-2/3 justify-center">
          <Weather />
          <section className="flex items-center">
            <ProfileImage />
            <div className="font-bold text-3xl">
              <p className="tracking-widest ">
                Hello, <span>{auth?.metadata?.first_name}</span>
              </p>
            </div>{" "}
          </section>
          <section>
            <p className="font-bold text-xl mt-10 my-4 text-dgray">
              What do you want to do today?
            </p>
            <div className="flex border-2 mx-8 border-dgray justify-center gap-6 basis-72 shadow shadow-black-500/50 rounded-lg p-8">
              <div>
                <p className="flex justify-center">
                  <Image
                    src="/deposit.png"
                    alt="deposit icon"
                    width={50}
                    height={50}
                    className="text-center ml-5 mr-5"
                    id="deposit"
                    onClick={handleClick("deposit")}
                  />
                </p>
                <p className="text-center mt-2">Deposit</p>
              </div>
              <div>
                <p className="flex justify-center">
                  <Image
                    src="/withdraw.png"
                    alt="withdraw icon"
                    width={50}
                    height={50}
                    className="text-center ml-5 mr-5"
                    id="withdraw"
                    onClick={handleClick("withdraw")}
                  />
                </p>
                <p className="text-center mt-2">Withdraw</p>
              </div>
              <div>
                <p className="flex justify-center">
                  <Image
                    src="/transfer2.png"
                    alt="transfer icon"
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
                    src="/paybills.png"
                    alt="pay bill icon"
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
                    alt="pay card icon"
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
                    alt="statement icon"
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
            <div className="mx-8">
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
          <h2 className="font-bold text-xl mt-10 my-4 text-dgray">
            Your orders at Educkstore
          </h2>
          <article className=" mx-8">
            <div className="border-2 border-dgray rounded-xl p-4 mt-2">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="text-sm font-bold text-left">
                      Order placed
                    </th>
                    <th className="text-sm font-bold text-left">Order #</th>
                    <th className="text-sm font-bold text-left">Order total</th>
                    <th className="text-sm font-bold"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-4 text-center">
                        <h2 className="text-2xl font-medium">
                          You don't have any orders yet
                        </h2>
                        <Link href={"/educkstore"}>
                          <Button>Start shopping now</Button>
                        </Link>
                      </td>
                    </tr>
                  ) : (
                    orders
                      .slice() // Create a copy of the orders array to avoid mutating the original array
                      .sort((a, b) => {
                        // Sort orders based on date in descending order (latest first)
                        const dateA =
                          a.created_at.seconds * 1000 +
                          a.created_at.nanoseconds / 1000000;
                        const dateB =
                          b.created_at.seconds * 1000 +
                          b.created_at.nanoseconds / 1000000;
                        return dateB - dateA;
                      })
                      .map(order => {
                        const date =
                          order.created_at.seconds * 1000 +
                          order.created_at.nanoseconds / 1000000;

                        return (
                          <tr key={order.id}>
                            <td className="text-sm text-left">
                              {new Date(date).toLocaleDateString()}
                            </td>
                            <td className="text-sm text-left">{order.id}</td>
                            <td className="text-sm text-left">
                              ${" "}
                              {order.products
                                .map(
                                  product => product.quantity * product.price
                                )
                                .reduce(
                                  (total, currentValue) => total + currentValue,
                                  0
                                )}
                            </td>
                            <td className="text-sm text-left">
                              <button
                                onClick={() => showOrderDetail(order)}
                                className="underline cursor-pointer text-morange"
                              >
                                view order
                              </button>
                            </td>
                          </tr>
                        );
                      })
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </section>
        <aside className="flex-1/3 ml-6">
          <p className="mb-2 text-2xl text-center text-9 font-bold">
            Your Metrics{" "}
          </p>

          <div className="bg-[#fec53b] mb-4 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-2xl mb-3">Educkstore</p>
            <p className="font-bold text-xl mb-3">Total Spent</p>
            <p className="text-2xl ">
              $ {calculateTotalSpentFromMultipleOrders(orders).toFixed(2)}
            </p>
          </div>

          <section className="text-center font-bold text-2xl my-4">
            <hr className="h-px  my-4 bg-white border-0 "></hr>
            <p className="mb-2 font-bold">Your Tokens</p>
            <div className="flex justify-center items-center">
              <Image src="/educklogo2.png" width={30} height={30} alt="logo" />
              <p className="ml-2">
                {" "}
                {(calculateTotalSpentFromMultipleOrders(orders) * 0.1).toFixed(
                  0
                )}
              </p>
            </div>
            <hr className="h-px  my-4 bg-white border-0 "></hr>
          </section>
          <section>
            <p className="mb-2 text-2xl text-center text-9 font-bold">
              Your Accounts{" "}
            </p>
            <div className="bg-[#fec53b] mb-4 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
              <p className="font-bold text-xl mb-3">Checking Account</p>
              <p className="text-2xl ">
                {" "}
                {accountChecking.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="bg-[#ec552a] text-white mb-8 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
              <p className="font-bold text-xl mb-3">Savings Account</p>
              <p className="text-2xl ">
                {" "}
                {accountSavings.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <hr className="h-px  my-4 bg-white border-0 "></hr>
            <div>
              <p className="mb-4 text-center font-bold text-2xl">Your Cards</p>

              <div className="flex justify-center">
                <div className="mb-[20px] flex flex-col justify-center">
                  <Image
                    src="/quackprodebitblank.png"
                    alt="quack pro debit card photo"
                    width={300}
                    height={200}
                    className="rounded-xl "
                  />
                  <div className="text-left -mt-[110px] ">
                    <p className=" text-2xl mt-16 ml-[160px]">$0.00</p>
                  </div>
                </div>
              </div>
              <div className="mb-[40px] flex justify-center">
                <div>
                  <Image
                    src="/quackprocreditblank.png"
                    alt="quack pro credit card photo"
                    width={300}
                    height={200}
                    className="rounded-xl"
                  />
                  <div className="text-left -mt-[110px] flex flex-col">
                    <p className=" text-2xl mt-16 ml-[180px]">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
      {openModal && (
        <OrderDetailModal order={selectedOrder} onClose={closeOrderDetail} />
      )}
    </>
  );
};

function OrderDetailModal({ order, onClose }) {
  const date =
    order.created_at.seconds * 1000 + order.created_at.nanoseconds / 1000000;

  function calculateTotalSpent(order) {
    let totalSpent = 0;
    order.products.forEach(product => {
      totalSpent += product.quantity * product.price;
    });
    return totalSpent;
  }

  return (
    <section className="flex  justify-center fixed top-0 left-0 w-screen h-screen bg-black/80">
      <div className="relative bg-white rounded-lg p-6 w-1/2 h-1/2 overflow-y-auto">
        <div className="flex items-center">
          <span className="text-xl font-bold flex flex-wrap mr-2">
            Order #:{" "}
          </span>{" "}
          <span> {order.id}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-xl mr-2">Placed on: </span>{" "}
          <span>{new Date(date).toLocaleString()}</span>
        </div>
        <div className="mt-8 bg-llav p-4 rounded-lg">
          {order.products.map(orderProduct => (
            <div key={orderProduct.id}>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div className="mb-4 ">
                    <Image
                      src={orderProduct.image}
                      alt={orderProduct.name}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{orderProduct.title}</p>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <p>{orderProduct.quantity}</p>
                  <p className="mr-2">x</p>
                  <p> {orderProduct.price}</p>
                </div>
              </div>
            </div>
          ))}
          <span className="flex justify-end mt-2 items-center  font-medium ">
            Total spent:{" "}
            <span className="font-bold text-lg ml-2">
              ${calculateTotalSpent(order).toFixed(2)}
            </span>
          </span>
          <span></span>
        </div>

        <button className="absolute text-2xl top-4 right-4" onClick={onClose}>
          X
        </button>
      </div>
    </section>
  );
}

export default DashboardPage;
