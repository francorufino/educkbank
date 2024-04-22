"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartTotalValue = cart.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  const addToCart = item => {
    const itemIsInclude = cart.find(cartItem => cartItem.title === item.title);

    if (itemIsInclude) {
      updateItemInCart(item);
    } else {
      setCart(prevState => prevState.concat(item));
    }
  };

  const updateItemInCart = item => {
    const modifiedCartValue = cart.map(cartItem =>
      cartItem.title === item.title
        ? { ...cartItem, quantity: item.quantity }
        : cartItem
    );

    setCart(modifiedCartValue);
  };

  const deleteItemInCart = item => {
    const newCartItems = cart.filter(cartItem => cartItem.title !== item.title);

    setCart(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, cartTotalValue, deleteItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
