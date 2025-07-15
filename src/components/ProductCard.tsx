"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/products";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover mb-4"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
