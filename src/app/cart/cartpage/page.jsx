"use client";
import React from "react";
import CartPageProductList from "../CartPageProductList";
import { useCartContext } from "@/components/context/CartContext";

const page = () => {
  const { cart } = useCartContext();
  return (
    <>
      <div className="flex justify-center font-semibold text-2xl mb-12 mt-8">
        <h1>Your cart</h1>
      </div>

      {/* fazer um map aqui com os  dados do carrinho e passar  para o componente de lista de produtos. */}

      <CartPageProductList cartItems={cart} />
    </>
  );
};

export default page;
