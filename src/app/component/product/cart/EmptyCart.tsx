import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingCart className="w-12 h-12 text-gray-400" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Looks like you haven added anything to your cart yet. Start shopping
          to fill it up with amazing products!
        </p>

        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
            Start Shopping
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-sm text-gray-600">Free Shipping</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm text-gray-600">Secure Payment</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl mb-2">↩️</div>
            <div className="text-sm text-gray-600">Easy Returns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
