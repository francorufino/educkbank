import React from "react";
import Image from "next/image";
import BtnSmall from "@/components/button/BtnSmall";
import QtySelector from "@/components/products/QtySelector";
import Link from "next/link";
import Button from "@/components/button/Button";

const CartPageProductList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      {cartItems.length === 0 ? (
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
          {cartItems.map((e) => (
            <div>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div className="w-48 h-300 bg-red-200">
                    <Image src="/educk2.png" alt="" width={100} height={100} />
                  </div>
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-[10px] text-[#6b7280]">{e.slug}</p>
                    <p>{e.description}</p>
                    {/* <QtySelector>Qtde</QtySelector> */}
                    <p className="bg-red-200">qtde (update)</p>

                    <BtnSmall
                      onClick={() =>
                        console.log(`Delete Product Slug ${e.slug}`)
                      }
                      className="bg-red-200 underline text-[#6b7280] mb-4"
                    >
                      Delete
                    </BtnSmall>
                  </div>
                </div>
                <div className="flex justify-center mr-12">
                  <p className="bg-red-200">2</p>
                  <p className="mr-2">x</p>
                  <p> {e.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mr-12">
            <p className="mr-2">Total:</p>
            <p className="bg-red-200">$ 10.00</p>
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
