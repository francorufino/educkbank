import React from "react";
import Image from "next/image";

const Statement = () => {
  return (
    <div>
      <p className="mt-12 mb-6 font-bold">Recent Transactions</p>

      <div className="flex mb-4 justify-between gap-6">
        <div className="flex gap-6">
          <p className="flex items-center">
            <Image src="/bill3.png" width={25} height={25} />
          </p>
          <div>
            <p>Allstate Car Insurance</p>
            <p className="text-xs text-[#6b7280]">04/23/2024</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <p>-$85.00</p>
          </div>
          <div>
            <p>Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
