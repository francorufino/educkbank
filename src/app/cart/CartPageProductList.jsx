"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BtnSmall from "@/components/button/BtnSmall";
import Link from "next/link";
import Button from "@/components/button/Button";
import { CartContext } from "@/app/context/CartContext";
import QtySelector from "@/components/products/QtySelector";

const CartPageProductList = () => {
  const { cart, cartTotalValue, deleteItemInCart } = useContext(CartContext);

  return (
    <section>
      {cart.length === 0 ? (
        <section className=" mt-12 flex flex-col justify-center text-center">
          <p className="text-2xl mb-12">Oh no! There is nothing here yet</p>
          <section className="flex justify-center  mt-2 mb-8">
            <Link href="/educkstore">
              <Button>Start shopping now</Button>
            </Link>
          </section>
        </section>
      ) : (
        <section>
          <section className="flex justify-between text-xl font-semibold border-y-2 border-white mb-4">
            <section className="">
              <p className="my-4 pl-12">Product</p>
            </section>
            <section className="flex justify-center ">
              <p className="my-4 pr-12">Total</p>
            </section>
          </section>
          {cart.map(cartItem => (
            <section key={cartItem.id}>
              <section className="flex justify-between mb-4 border-b-2 border-white ">
                <section className="flex gap-4 ml-12">
                  <section className="relative w-48 h-300">
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      layout="fill"
                      className="object-cover"
                    />
                  </section>
                  <section>
                    <p className="font-semibold">{cartItem.title}</p>
                    <p className="text-[10px] text-dgray">{cartItem.slug}</p>
                    <p>{cartItem.description}</p>
                    <section className="w-full flex flex-col items-end">
                      <section className="flex flex-col justify-center">
                        <QtySelector item={cartItem} />
                        <BtnSmall
                          onClick={() => deleteItemInCart(cartItem)}
                          className="!bg-mlilas underline text-morange my-4"
                        >
                          Delete
                        </BtnSmall>
                      </section>
                    </section>
                  </section>
                </section>
                <section className="flex  justify-center ">
                  <p>{cartItem.quantity}</p>
                  <p className="pr-2">x</p>
                  <p className="pr-12">
                    {" "}
                    {cartItem.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </section>
              </section>
            </section>
          ))}
          <section className="flex justify-end pr-12">
            <p className="mr-2">Total:</p>
            <p className="">
              $ {(Math.round(cartTotalValue * 100) / 100).toFixed(2)}
            </p>
          </section>
          <section className="flex justify-center mt-8 mb-4 ">
            <Link href="/cart/checkoutpage">
              <Button>Checkout</Button>
            </Link>
          </section>
        </section>
      )}
    </section>
  );
};

export default CartPageProductList;

/* 
 

*/
