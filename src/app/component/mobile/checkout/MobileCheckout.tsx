"use client";
import { useState } from "react";
import { ShippingForm } from "./ShippingForm";
import { PaymentForm } from "./PaymentForm";
import { ProductSummary } from "./ProductSummary";

const phoneCaseImage =
  "https://rukminim1.flixcart.com/image/192/240/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=60&crop=false";
const headphonesImage =
  "https://rukminim1.flixcart.com/image/192/240/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=60&crop=false";

const sampleProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    quantity: 1,
    image: headphonesImage,
    variant: "Black, Noise Cancelling",
  },
  {
    id: "2",
    name: "Smartphone Case",
    price: 29.99,
    quantity: 2,
    image: phoneCaseImage,
    variant: "Clear, iPhone 15",
  },
];

export const MobileCheckout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <ProductSummary products={sampleProducts} />
            <ShippingForm onNext={handleNextStep} />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <ProductSummary products={sampleProducts} />
            <PaymentForm onNext={handleNextStep} />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-success-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground mb-4">
                Thank you for your purchase. Your order will be shipped soon.
              </p>
              <div className="bg-muted rounded-xl p-4 mb-6">
                <p className="text-sm font-medium">Order #12345</p>
                <p className="text-xs text-muted-foreground">
                  Estimated delivery: 3-5 business days
                </p>
              </div>
            </div>
            <ProductSummary products={sampleProducts} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle bg-gray-200">
      {/* <CheckoutHeader step={currentStep} totalSteps={totalSteps} /> */}

      <div className="pb-8 px-4">
        <div className="max-w-md mx-auto pt-6">{renderStepContent()}</div>
      </div>
    </div>
  );
};
