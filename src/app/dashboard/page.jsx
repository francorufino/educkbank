/* eslint-disable react/no-unescaped-entities */
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

const DashboardPage = () => {
  const [action, setAction] = useState("");
  const [userName, setUserName] = useState("Rebecca");
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [photo, setPhoto] = useState("");
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { auth, loading } = useContext(AuthContext);
  const { push } = useRouter();

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
        <section className="flex-2/3 ">
          <p className="text-[#6b7280] text-md mb-4">
            March, 27th 2024 | Partly Cloudy
          </p>
          <section className="flex items-center">
            <ProfileImage />
            <div className="font-bold text-3xl">
              <p className="tracking-widest ">
                Hello, <span>{auth?.metadata?.first_name}</span>
              </p>
            </div>{" "}
          </section>
          <section>
            <p className="font-bold my-4 text-[#6b7280]">
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
          <article className="mt-10">
            <h2 className="text-2xl font-bold">Orders</h2>
            <div className="flex flex-col bg-white rounded-xl p-4 mt-2">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-bold">ID</div>
                <div className="text-sm font-bold">PRODUCTS</div>
                <div className="text-sm font-bold">DATE</div>
              </div>
              <div className="flex flex-col gap-8 mt-4">
                {orders.length === 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="text-2xl font-medium">
                      You don't have any order
                    </h2>
                    <Link href={"/educkstore"}>
                      <Button>Go to order</Button>
                    </Link>
                  </div>
                ) : (
                  orders.map(order => {
                    const date =
                      order.created_at.seconds * 1000 +
                      order.created_at.nanoseconds / 1000000;

                    return (
                      <button
                        key={order.id}
                        onClick={() => showOrderDetail(order)}
                        className="flex items-center justify-between gap-8 transition-all p-2 rounded-lg hover:bg-black/5"
                      >
                        <div className="text-sm text-center">{order.id}</div>
                        <div className="text-sm text-left">
                          {order.products
                            .map(product => product.title)
                            .join(",")}
                        </div>
                        <div className="text-sm text-right">
                          {new Date(date).toLocaleString()}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </article>
        </section>
        <aside className="flex-1/3 ml-6">
          <p className="mb-2 text-2xl text-center text-9 font-bold">
            Your Metrics{" "}
          </p>
          <div className="bg-[#fec53b] mb-4 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-xl mb-3">Total Spent</p>
            <p className="text-2xl ">
              $ {calculateTotalSpentFromMultipleOrders(orders).toFixed(2)}
            </p>
          </div>
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
    <section className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black/80">
      <div className="relative bg-white rounded-lg p-6 w-1/2 h-1/2 overflow-y-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Order ID: {order.id}</h2>
          <span>Created on: {new Date(date).toLocaleString()}</span>
        </div>
        <div className="mt-8 bg-gray-200 p-4 rounded-lg">
          {order.products.map(orderProduct => (
            <div key={orderProduct.id}>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div>
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
                <div className="flex justify-center mx-10">
                  <p>{orderProduct.quantity}</p>
                  <p className="mr-2">x</p>
                  <p> {orderProduct.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="flex justify-end mt-2 font-medium">
          Total spent: ${calculateTotalSpent(order).toFixed(2)}
        </span>
        <button className="absolute text-2xl top-4 right-4" onClick={onClose}>
          X
        </button>
      </div>
    </section>
  );
}

export default DashboardPage;
