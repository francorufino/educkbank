"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import { CartContext } from "@/app/context/CartContext";
import { db } from "@/lib/firebase/config";
import {
  updateDoc,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const CartPageProductListCheckout = () => {
  const { push } = useRouter();
  const { auth } = useContext(AuthContext);
  const { cart, cartTotalValue, clearCart } = useContext(CartContext);
  // const [tokens, setTokens] = useState(0);

  async function placeOrder() {
    try {
      cart.forEach(async cartItem => {
        const itemRef = doc(db, "productsFirebase", cartItem.slug);
        // setTokens(tokens + cartItem.price.toFixed(2) * 0.1);
        await updateDoc(itemRef, {
          inStock: cartItem.inStock - cartItem.quantity,
        });
      });

      const collectionRef = collection(db, "orders");
      await addDoc(collectionRef, {
        user: { id: auth.user.uid, ...auth.metadata },
        products: cart,
        created_at: serverTimestamp(),
      });

      clearCart();
      push("/cart/thanks");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div className=" mt-12 flex flex-col justify-center text-center">
          <p className="text-2xl mb-12">Oh no! There is nothing here yet</p>
          <div className="flex justify-center  mt-2 mb-8">
            <Button>Start shopping now</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between text-xl font-semibold border-y-2 border-white mb-4">
            <div className="">
              <p className="my-4 pl-12">Product</p>
            </div>
            <div className="flex justify-center ">
              <p className="my-4 pr-12">Total</p>
            </div>
          </div>
          {cart.map(cartItem => (
            <div key={cartItem.id}>
              <div className="flex justify-between mb-4 border-b-2 border-white ">
                <div className="flex gap-4 ml-12">
                  <div>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{cartItem.title}</p>
                  </div>
                </div>
                <div className="flex justify-center mx-10">
                  <p>{cartItem.quantity}</p>
                  <p className="mr-2">x</p>
                  <p> {cartItem.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mr-12">
            <p className="mr-2 font-semibold">Total:</p>
            <p className="font-semibold">
              $ {(Math.round(cartTotalValue * 100) / 100).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-4">
            {/* <Link href="/cart/cartReport"> */}
            <Button onClick={placeOrder}>Place your order</Button>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPageProductListCheckout;

/* 
 

*/
