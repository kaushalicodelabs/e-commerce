import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

export default function CartItem({
  item,
}: {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center border-b py-4">
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
