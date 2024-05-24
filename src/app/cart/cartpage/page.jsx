import React from "react";
import CartPageProductList from "../CartPageProductList";

const CartPage = () => {
  return (
    <>
      <section className="flex justify-center font-semibold text-2xl mb-12 mt-8">
        <h1>Your cart</h1>
      </section>
      <CartPageProductList />
    </>
  );
};

export default CartPage;
