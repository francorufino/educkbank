import React from "react";

const Button = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`cursor-default bg-mlilas border-2 border-morange text-morange font-semibold py-2.5 px-8 rounded-full disabled:opacity-30 disabled:pointer-events-none ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
