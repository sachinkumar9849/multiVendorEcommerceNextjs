"use client";
import { useState } from "react";
import { CheckoutProgress } from "./CheckoutProgress";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummary } from "./OrderSummary";
import { SuccessPage } from "./SuccessPage";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(2);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <SuccessPage onReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <CheckoutProgress currentStep={currentStep} />

        {/* Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Checkout Form - Takes 2/3 of the width */}
          <div className="lg:col-span-2">
            <CheckoutForm onNext={handleNext} />
          </div>

          {/* Order Summary - Takes 1/3 of the width */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
