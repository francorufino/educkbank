import React from "react";

const BtnSmallOutLine = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`cursor-default bg-mlilas text-morange text-semibold py-0 px-3 border-2 border-morange rounded-full ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default BtnSmallOutLine;
