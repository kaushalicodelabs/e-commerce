export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://picsum.photos/400/400?random=1",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-packed smart watch with fitness tracking",
    image: "https://picsum.photos/400/400?random=2",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable Bluetooth speaker with excellent sound quality",
    image: "https://picsum.photos/400/400?random=3",
  },
];

export async function getProducts() {
  return products;
}

export async function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
