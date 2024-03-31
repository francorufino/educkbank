import React from "react";

const BtnSmall = ({ children, className = "", ...args }) => {
  return (
    <button
      className={` bg-amber-400 hover:bg-orange-500 text-black text-semibold py-0 px-3 rounded-full ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default BtnSmall;
