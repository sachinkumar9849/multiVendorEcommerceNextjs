"use client";
import React, { useState, useEffect } from "react";
import { Check, MapPin, Truck, Clock, Star } from "lucide-react";

export default function OrderConfirmed() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  const orderDetails = {
    orderNumber: "#ORD-2025-7845",
    total: "Rs 24.99",
    estimatedTime: "25-30 min",
    restaurant: "Smartwatch, Magnetic",
    address: "Kathmandu , Nepal",
    items: [
      { name: "Smartwatch, Magnetic (10 pcs)", price: "Rs 12.99", qty: 1 },
      { name: "Smartwatch", price: "Rs 8.50", qty: 1 },
      { name: "Magnetic", price: "Rs 3.50", qty: 1 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-ping`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Header */}

      {/* Main Content */}
      <div className="relative z-10 px-4 py-6 space-y-8 mt-[22px]">
        {/* Success Animation */}
        <div className="text-center animate-bounce">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg mb-4">
            <Check className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600">Your delicious is on its way</p>
        </div>

        {/* Order Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Order Number</span>
            <span className="font-mono text-sm font-medium text-gray-900">
              {orderDetails.orderNumber}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Total Amount</span>
            <span className="text-xl font-bold text-gray-900">
              {orderDetails.total}
            </span>
          </div>

          <div className="bg-emerald-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center space-x-2 text-emerald-600">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                Estimated delivery: {orderDetails.estimatedTime}
              </span>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {orderDetails.restaurant}
                </h3>
                <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{orderDetails.address}</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    4.8 (120 reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Your Order</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {orderDetails.items.map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 flex justify-between items-center"
              >
                <div className="flex-1">
                  <span className="text-gray-900 font-medium">{item.name}</span>
                  <span className="text-gray-500 text-sm ml-2">
                    ×{item.qty}
                  </span>
                </div>
                <span className="font-semibold text-gray-900">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Status */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Delivery Status</h3>
          <div className="space-y-4">
            {[
              { status: "Order Placed", time: "Just now", completed: true },
              {
                status: "Preparing ",
                time: "5-10 min",
                completed: false,
                current: true,
              },
              {
                status: "Out for Delivery",
                time: "15-20 min",
                completed: false,
              },
              { status: "Delivered", time: "25-30 min", completed: false },
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-emerald-500 text-white"
                      : step.current
                        ? "bg-[#222f3e] text-white animate-pulse"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-5 h-5" />
                  ) : step.current ? (
                    <Truck className="w-4 h-4" />
                  ) : (
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <span
                    className={`font-medium ${step.current ? "text-blue-600" : "text-gray-900"}`}
                  >
                    {step.status}
                  </span>
                  <div className="text-sm text-gray-500">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-8">
          <button className="w-full bg-gradient-to-r bg-[#222f3e]  text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Track Your Order
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200 to-transparent rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200 to-transparent rounded-full opacity-50 translate-y-20 -translate-x-20"></div>
    </div>
  );
}
