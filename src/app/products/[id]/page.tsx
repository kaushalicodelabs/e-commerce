import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { ClientAddToCart } from "@/components/ClientAddToCart";

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
