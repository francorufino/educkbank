import React from "react";

const Button = ({ children, className = "", ...args }) => {
  return (
    <button
      className={` bg-myellow hover:bg-morange text-black font-semibold py-3 px-8 rounded-full disabled:opacity-30 disabled:pointer-events-none ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
