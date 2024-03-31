"use client";
import React from "react";
import { useState } from "react";
import Button from "./Button.jsx";
import { useRouter } from "next/navigation.js";

const ButtonClientSide = () => {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    setCounter(counter + 1);
  };

  const routerGoBack = useRouter();
  // router.replace('/....');
  // router.refresh();
  // router.back()
  // routerforward();

  return (
    <div>
      <Button onClick={increase}>+</Button>;<p>{counter}</p>
      <Button onClick={() => routerGoBack.back()}>Go Back</Button>
    </div>
  );
};

export default ButtonClientSide;
