import React from "react";
import Image from "next/image";

const CartPageProductList = () => {
  return (
    <>
      <div className="flex justify-between mb-4 border-b-2 border-white ">
        <div className="flex gap-4 ml-12">
          <div className="w-48 h-300 ">
            <Image src="/educk2.png" alt="" width={100} height={100} />
          </div>
          <div>
            <p className="font-semibold">Traveler mug</p>
            <p className="text-[10px] text-[#6b7280]">product #: educk007</p>
            <p>Mug in ceramic with band and lid - yellow</p>
            <p>$25.99</p>
            <p>- 1 + </p>
            <p className="underline text-[#6b7280] mb-4">Delete</p>
          </div>
        </div>
        <div className="flex justify-center mr-12">
          <p>$23.00</p>
        </div>
      </div>

      <div className="flex justify-between mb-4 border-b-2 border-white">
        <div className="flex gap-4 ml-12">
          <div className="w-48 h-300 ">
            <Image src="/educk2.png" alt="" width={100} height={100} />
          </div>
          <div>
            <p className="font-semibold">Traveler mug</p>
            <p className="text-[10px] text-[#6b7280]">product #: educk007</p>
            <p>Mug in ceramic with band and lid - yellow</p>
            <p>$25.99</p>
            <p>- 1 + </p>
            <p className="underline text-[#6b7280] mb-4">Delete</p>
          </div>
        </div>
        <div className="flex justify-center mr-12">
          <p>$23.00</p>
        </div>
      </div>
    </>
  );
};

export default CartPageProductList;
