import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { getProductById } from "@/lib/products";
import { CartContext } from "@/context/CartContext";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Back to products
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover"
          priority
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <ClientAddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

// Mark client component with "use client" directive
function ClientAddToCart({
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
