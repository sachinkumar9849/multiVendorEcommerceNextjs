"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/app/component/product/cart/CartItem";
import EmptyCart from "@/app/component/product/cart/EmptyCart";
import { ShoppingBag, CreditCard, Shield, Truck } from "lucide-react";

interface CartClientProps {
  initialItems: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    color: string;
    size: string;
    quantity: number;
    inStock: boolean;
  }[];
}

export const CartClient = ({ initialItems }: CartClientProps) => {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r bg-[#222f3e] rounded-lg">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Order Summary
            </h2>
          </div>

          {/* Price breakdown */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-4 mb-6 p-3 bg-green-50 rounded-lg border border-green-200">
            <Shield className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-800">
                Secure Checkout
              </p>
              <p className="text-xs text-green-600">
                SSL encrypted & protected
              </p>
            </div>
          </div>

          {/* Checkout button */}
          <Button
            className="w-full bg-gradient-to-r bg-[#222f3e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-4"
            size="lg"
          >
            <CreditCard className="h-5 w-5 mr-2" />
            Proceed to Checkout
          </Button>

          {/* Additional info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="h-4 w-4 text-blue-500" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>

          {/* Taxes note */}
          <p className="mt-4 text-xs text-gray-500 text-center">
            Taxes calculated at checkout. Final total may vary.
          </p>
        </div>
      </div>
    </div>
  );
};
