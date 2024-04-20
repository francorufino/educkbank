"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Button from "../button/Button";
import { useCartContext } from "../context/CartContext";
// talvez problema aqui com o botao

const QtySelector = ({ item }) => {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    addToCart({ ...item, quantity });
    console.log({ ...item, quantity });
    alert(item);
  };

  return (
    <div className="flex flex-col justify-center gap-5 mt-6">
      <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
      <Button className="w-full hover:bg-blue-600" onClick={handleAdd}>
        Add to cart
      </Button>
    </div>
  );
};

export default QtySelector;
