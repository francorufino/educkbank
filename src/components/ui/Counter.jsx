"use client";
import React from "react";
import BtnSmall from "../button/BtnSmall";

const Counter = ({ counter, setCounter, max }) => {
  const increase = () => {
    counter < max && setCounter(counter + 1);
  };

  const decrease = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <section className="flex justify-center intems-center items-center gap-3">
      <BtnSmall onClick={decrease} className="active:bg-dgray">
        -
      </BtnSmall>
      <p className="text-sm font-semibold">{counter}</p>
      <BtnSmall onClick={increase} className="active:bg-dgray">
        +
      </BtnSmall>
    </section>
  );
};

export default Counter;
