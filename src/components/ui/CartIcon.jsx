import Image from "next/image";
import React from "react";
import { useCartContext } from "../../app/context/CartContext";
import Link from "next/link";

const CartIcon = () => {
  const { cart } = useCartContext();
  const cartQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <Link className="flex items-center gap-1" href={"/cart/cartpage"}>
      <section>
        <Image src={"/cart.png"} width={50} height={50} alt="Cart image" />
        <span className="bg-morange text-white font-bold text-[12px] rounded-full px-2  py-[0.10rem] float-right -mt-[63px] ">
          {cartQuantity}
        </span>
      </section>
    </Link>
  );
};

export default CartIcon;
