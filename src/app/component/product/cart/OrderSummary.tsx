import React from "react";
import { CreditCard, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  shipping,
  tax,
  total,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Order Summary
        </h3>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>55</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          {shipping === 0 && (
            <div className="text-sm text-green-600 font-medium">
              🎉 Free shipping on orders over $100!
            </div>
          )}
          <div className="flex justify-between text-gray-600">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-xl font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
          <CreditCard className="w-5 h-5 mr-2" />
          Proceed to Checkout
        </Button>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Secure checkout with SSL encryption</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Truck className="w-4 h-4 text-blue-500" />
            <span>Free returns within 30 days</span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 mb-3 text-center">
            We Accept
          </div>
          <div className="flex justify-center gap-2">
            <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
              VISA
            </div>
            <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
              MC
            </div>
            <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
              AMEX
            </div>
            <div className="w-10 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
              PP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
