"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  Heart,
  Share,
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
  inStock: boolean;
}

const MobileCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      size: "One Size",
      color: "Black",
      quantity: 1,
      inStock: true,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop",
      size: "42mm",
      color: "Silver",
      quantity: 2,
      inStock: true,
    },
    {
      id: "3",
      name: "Minimalist Backpack",
      price: 89.99,
      originalPrice: 120.0,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      size: "Medium",
      color: "Navy",
      quantity: 1,
      inStock: false,
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const freeShippingThreshold = 100;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-surface border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">My Cart</h1>
            <Badge variant="secondary" className="ml-1">
              {cartItems.length}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Share className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Free Shipping Banner */}
      {amountForFreeShipping > 0 && (
        <div className="bg-accent text-accent-foreground p-3 text-center text-sm">
          Add ${amountForFreeShipping.toFixed(2)} more for FREE shipping! 🚚
        </div>
      )}

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="p-4 bg-surface border border-border">
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="relative flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover bg-surface-secondary"
                />
                {item.originalPrice && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5"
                  >
                    SALE
                  </Badge>
                )}
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-foreground truncate pr-2">
                    {item.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Variants */}
                <div className="flex gap-2 mb-2">
                  {item.size && (
                    <Badge variant="outline" className="text-xs">
                      Size: {item.size}
                    </Badge>
                  )}
                  {item.color && (
                    <Badge variant="outline" className="text-xs">
                      {item.color}
                    </Badge>
                  )}
                </div>

                {/* Stock Status */}
                {!item.inStock && (
                  <div className="text-destructive text-sm mb-2">
                    Out of Stock
                  </div>
                )}

                {/* Price and Quantity */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={!item.inStock}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, 1)}
                      disabled={!item.inStock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Saved for Later Section */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-muted-foreground" />
          <h2 className="font-medium text-foreground">Saved for Later</h2>
          <Badge variant="secondary">2</Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Items you saved are stored here
        </div>
      </div>

      {/* Order Summary */}
      <div className="sticky bottom-0 bg-surface border-t border-border p-4 space-y-4">
        <Card className="p-4 bg-surface-secondary">
          <h3 className="font-medium text-foreground mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Subtotal ({cartItems.length} items)
              </span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? (
                  <span className="text-success">FREE</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base font-medium bg-interactive hover:bg-interactive-hover text-interactive-foreground"
            disabled={
              cartItems.length === 0 || cartItems.some((item) => !item.inStock)
            }
          >
            Proceed to Checkout
          </Button>
          <Button variant="outline" className="w-full h-12 text-base">
            Continue Shopping
          </Button>
        </div>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="text-xs text-muted-foreground">
            Secure payment with
          </span>
          <div className="flex gap-1">
            <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
              💳
            </div>
            <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
              🅿️
            </div>
            <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-bold">
              🍎
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCart;
