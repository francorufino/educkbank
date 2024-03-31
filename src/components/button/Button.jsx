import React from "react";

const Button = ({ children, className = "", ...args }) => {
  return (
    <button
      className={` bg-amber-400 hover:bg-orange-500 text-black font-semibold py-3 px-8 rounded-full ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
