"use client";
import { useEffect, useState } from "react";
import Counter from "../ui/Counter";
import Button from "../button/Button";
import { useCartContext } from "../../app/context/CartContext";
import { usePathname } from "next/navigation";
import ButtonOutLine from "../button/ButtonOutLine";
import CounterOutLine from "../ui/CounterOutLine";

const QtySelector = ({ item }) => {
  const pathname = usePathname();

  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(item?.quantity ?? 1);
  }, [item.quantity]);

  const handleAdd = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <section className={`flex flex-col justify-end gap-4 mt-6 `}>
      {item.inStock === 0 ? (
        <>
          <CounterOutLine />
          <ButtonOutLine>
            <span className="text-morange font-bold">Sold out</span>
          </ButtonOutLine>
        </>
      ) : (
        <section
          className={`flex flex-col gap-4 ${
            item.inStock === 0 ? "opacity-30" : "opacity-100"
          }`}
        >
          <Counter
            max={item.inStock}
            counter={quantity}
            setCounter={setQuantity}
          />
          <Button className="w-full" onClick={handleAdd}>
            {pathname === "/cart/cartpage" ? "Update cart" : "Add to cart"}
          </Button>
        </section>
      )}
    </section>
  );
};

export default QtySelector;
