"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SuccessPageProps {
  onReset?: () => void;
  orderNumber?: string;
  estimatedDelivery?: string;
  total?: string;
}

export function SuccessPage({
  onReset,
  orderNumber,
  estimatedDelivery,
  total = "$1,789.05",
}: SuccessPageProps) {
  const [mounted, setMounted] = useState(false);
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState("");
  const [generatedDeliveryDate, setGeneratedDeliveryDate] = useState("");

  useEffect(() => {
    setMounted(true);

    // Generate order number if not provided
    if (!orderNumber) {
      const newOrderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`;
      setGeneratedOrderNumber(newOrderNumber);
    }

    // Generate delivery date if not provided
    if (!estimatedDelivery) {
      const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      setGeneratedDeliveryDate(deliveryDate.toLocaleDateString());
    }
  }, [orderNumber, estimatedDelivery]);

  if (!mounted) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="animate-pulse">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const displayOrderNumber = orderNumber || generatedOrderNumber;
  const displayDeliveryDate = estimatedDelivery || generatedDeliveryDate;

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-lg border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-8">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2 text-green-700">
                Order Confirmed!
              </h1>
              <p className="text-lg text-gray-600">
                Thank you for your purchase. Your order has been successfully
                processed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Order Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Order number:{" "}
                    <span className="font-mono text-gray-900">
                      {displayOrderNumber}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Total:{" "}
                    <span className="font-semibold text-gray-900">{total}</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Delivery Information
                  </h3>
                  <p className="text-sm text-gray-600">
                    Estimated delivery:{" "}
                    <span className="font-semibold text-gray-900">
                      {displayDeliveryDate}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Shipping method:{" "}
                    <span className="text-gray-900">Standard delivery</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-700 font-medium">
                  Confirmation email sent
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Package className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-700 font-medium">
                  Order being prepared
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/">
                <Button
                  onClick={onReset}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 py-3 h-auto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
              <p className="text-sm text-gray-600">
                Need help? Contact our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  customer support
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
