"use client";

import CartItem from "@/components/CartItem";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {
  const { cart, getCartTotal } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p className="mb-4">Your cart is empty</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: €{getCartTotal().toFixed(2)}
            </p>
            <button
              onClick={() => {
                alert(`Product bought for € ${getCartTotal()}`);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 inline-block"
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
