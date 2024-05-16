import React from "react";

const BtnSmall = ({ children, className = "", ...args }) => {
  return (
    <button
      className={` bg-myellow hover:bg-morange text-black text-semibold py-0 px-3 rounded-full ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default BtnSmall;
