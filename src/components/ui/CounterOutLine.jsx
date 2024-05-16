"use client";
import React from "react";
import BtnSmallOutLine from "../button/BtnSmallOutLine";

const Counter = () => {
  return (
    <section className="flex justify-center intems-center items-center gap-3">
      <BtnSmallOutLine>-</BtnSmallOutLine>
      <p className="text-sm font-semibold">0</p>
      <BtnSmallOutLine>+</BtnSmallOutLine>
    </section>
  );
};

export default Counter;
