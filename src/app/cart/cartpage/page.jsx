"use client";
import React from "react";
import Button from "@/components/button/Button";
import CartPageProductList from "../CartPageProductList";
import Link from "next/link";

const page = () => {
  // const goToCheckout = () => {
  //   alert("going to checkout");
  // };

  return (
    <>
      <div className="flex justify-center font-semibold text-2xl mb-12 mt-8">
        <h1>Your cart</h1>
      </div>
      <div className="flex justify-between text-xl font-semibold border-y-2 border-white mb-4">
        <div className="">
          <p className="my-4 pl-12">Product</p>
        </div>
        <div className="flex justify-center ">
          <p className="my-4 pr-12">Total</p>
        </div>
      </div>
      {/* fazer um map aqui com os  dados do carrinho e passar  para o componente de lista de produtos. */}
      <CartPageProductList />
      <div className="flex justify-center mt-8 mb-4">
        <Link href="/cart/checkoutpage">
          <Button>Checkout</Button>
        </Link>
      </div>
    </>
  );
};

export default page;
