"use client";

import { Minus, Plus, Trash2, AlertCircle } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    color: string;
    size: string;
    quantity: number;
    inStock: boolean;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItem = ({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="p-6 hover:bg-gray-50/50 transition-colors">
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          {!item.inStock && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Out of Stock
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                {item.name}
              </h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                <span>Color: {item.color}</span>
                <span>Size: {item.size}</span>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {!item.inStock && (
            <div className="flex items-center gap-2 mb-3 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>This item is currently out of stock</span>
            </div>
          )}

          <div className="flex justify-between items-end">
            {/* Quantity Controls */}
            <div className="flex items-center">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1 || !item.inStock}
                  className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 py-2 min-w-[3rem] text-center font-medium">
                  {item.quantity}
                </div>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  disabled={!item.inStock}
                  className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {item.quantity > 1 && (
                <div className="text-sm text-gray-600 mt-1">
                  ${(item.price * item.quantity).toFixed(2)} total
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
