import Image from 'next/image';
import React from 'react'
import { useCartContext } from '../context/CartContext'; 
import Link from 'next/link';

const CarritoIcon = () => {
  const { cart } = useCartContext();
  return (
    <Link href={"/cart/cartpage"}>
      <Image src={"/cart.png"} width={50} height={50} />
      <span className='border rounded-md bg-slate-300 p-1'>{cart.length}</span>
    </Link>
  );
};

export default CarritoIcon;
