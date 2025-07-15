"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export function ClientAddToCart({
  product,
}: {
  product: { id: number; name: string; price: number; image: string };
}) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="space-x-4">
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
      <Link
        href="/cart"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Buy Now
      </Link>
    </div>
  );
}
