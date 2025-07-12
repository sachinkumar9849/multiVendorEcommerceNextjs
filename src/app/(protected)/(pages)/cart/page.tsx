// app/(protected)/(pages)/cart/page.tsx
import { CartClient } from "./CartClient";

// Mock data - replace with your actual data fetching
const getCartItems = async () => {
  return [
    {
      id: "1",
      name: "Premium T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image:
        "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/4-80x80.jpg",
      color: "Black",
      size: "M",
      quantity: 2,
      inStock: true,
    },
    {
      id: "2",
      name: "Classic Jeans",
      price: 59.99,
      image:
        "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/3-80x80.jpg",
      color: "Blue",
      size: "32",
      quantity: 1,
      inStock: true,
    },
  ];
};

export default async function CartPage() {
  const cartItems = await getCartItems();

  return (
    <div className="padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Your Shopping Cart
        </h1>
        <CartClient initialItems={cartItems} />
      </div>
    </div>
  );
}
