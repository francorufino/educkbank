import React from "react";
import CartPageProductList from "../CartPageProductList";

const CartPage = () => {
  return (
    <>
      <div className="flex justify-center font-semibold text-2xl mb-12 mt-8">
        <h1>Your cart</h1>
      </section>

      {/* fazer um map aqui com os  dados do carrinho e passar  para o componente de lista de produtos. */}

      <CartPageProductList />
    </>
  );
};

export default CartPage;
