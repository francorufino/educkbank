"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BtnSmall from "@/components/button/BtnSmall";
import Link from "next/link";
import Button from "@/components/button/Button";
import { CartContext } from "@/components/context/CartContext";
import QtySelector from "@/components/products/QtySelector";

const CartPageProductList = () => {
  const { cart, cartTotalValue, deleteItemInCart } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <div className=" mt-12 flex flex-col justify-center text-center">
          <p className="text-2xl mb-12">Oh no! There is nothing here yet</p>
          <div className="flex justify-center  mt-2 mb-8">
            <Button>Start shopping now</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between text-xl font-semibold border-y-2 border-white mb-4">
            <div className="">
              <p className="my-4 pl-12">Product</p>
            </div>
            <div className="flex justify-center ">
              <p className="my-4 pr-12">Total</p>
            </div>
          </div>
          {cart.map(cartItem => (
            <div key={cartItem.id}>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div className="relative w-48 h-300">
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{cartItem.title}</p>
                    <p className="text-[10px] text-[#6b7280]">
                      {cartItem.slug}
                    </p>
                    <p>{cartItem.description}</p>
                    <div className="w-full flex flex-col items-end">
                      <div className="flex flex-col justify-center">
                        <QtySelector item={cartItem} />
                        <BtnSmall
                          onClick={() => deleteItemInCart(cartItem)}
                          className="bg-[#e6e6fa] underline text-[#6b7280] my-4"
                        >
                          Delete
                        </BtnSmall>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mx-10">
                  <p>{cartItem.quantity}</p>
                  <p className="mr-2">x</p>
                  <p> {cartItem.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mr-12">
            <p className="mr-2">Total:</p>
            <p className="">
              $ {(Math.round(cartTotalValue * 100) / 100).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-4 bg-red-200">
            <Link href="/cart/checkoutpage">
              <Button>Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPageProductList;

/* 
 

*/
