import React from "react";
import Button from "@/components/button/Button";
import CartPageProductList from "./CartPageProductList";
import Hr from "@/components/ui/Hr";

const page = () => {
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
        <Button>Checkout</Button>
      </div>
    </>
  );
};

export default page;
