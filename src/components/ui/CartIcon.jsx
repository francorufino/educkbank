import Image from "next/image";
import React from "react";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";

const CartIcon = () => {
  const { cart } = useCartContext();
  const cartQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <Link className="flex items-center gap-1" href={"/cart/cartpage"}>
      <Image src={"/cart.png"} width={50} height={50} alt="Cart image" />
      <span className="border rounded-md bg-red-300 p-1">{cartQuantity}</span>
    </Link>
  );
};

export default CartIcon;
