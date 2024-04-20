import React from "react";
import Image from "next/image";
import BtnSmall from "@/components/button/BtnSmall";

const CartPageProductList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="w-fill h-screen mt-12 flex justify-center items-flex-start">
          <span className="text-2xl italic">No Items On Cart</span>
        </div>
      ) : (
        <div>
          {cartItems.map((e) => (
            <div>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div className="w-48 h-300 ">
                    <Image src="/educk2.png" alt="" width={100} height={100} />
                  </div>
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-[10px] text-[#6b7280]">{e.slug}</p>
                    <p>{e.description}</p>
                    <BtnSmall onClick={()=> console.log(`Delete Product Slug ${e.slug}`)} className="underline text-[#6b7280] mb-4">
                      Delete
                    </BtnSmall>
                  </div>
                </div>
                <div className="flex justify-center mr-12">
                  <p>{e.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPageProductList;

/* 
 

*/
