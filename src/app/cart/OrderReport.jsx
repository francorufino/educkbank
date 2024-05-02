"use client";
import React, { useContext } from "react";
// import Button from "@/components/button/Button";
import { CartContext } from "@/app/context/CartContext";

const CartPageProductListCheckout = () => {
  const { cart, cartTotalValue } = useContext(CartContext);

  return (
    <div>
      {/* {cart.length === 0 ? (
        <div className=" mt-12 flex flex-col justify-center text-center">
          <p className="text-2xl mb-12">Oh no! There is nothing here yet</p>
          <div className="flex justify-center  mt-2 mb-8">
            <Button>Start shopping now</Button>
          </div>
        </div>
      ) : ( */}
      <div>
        <div className="flex justify-between text-lg font-semibold border-y-2  mb-4">
          <div className="">
            <p className="mt-4 pl-12">Products Purchased</p>
          </div>
          <div className="flex justify-center ">
            {/* <p className="my-4 pr-12">Total</p> */}
          </div>
        </div>
        {cart.map(cartItem => (
          <div key={cartItem.id}>
            <div className="flex justify-between border-b-2  ">
              <div className="flex gap-4 ml-12">
                <div>
                  <p>{cartItem.title}</p>
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
        <div className="flex justify-end mr-10">
          <p className="mr-2">Total:</p>
          <p className="">
            $ {(Math.round(cartTotalValue * 100) / 100).toFixed(2)}
          </p>
        </div>
      </div>
      {/* ) */}
      {/* } */}
    </div>
  );
};

export default CartPageProductListCheckout;

/* 
 

*/
