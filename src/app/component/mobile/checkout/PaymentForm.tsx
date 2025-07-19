"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

interface PaymentFormProps {
  onNext: () => void;
}

export const PaymentForm = ({ onNext }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const handleCardInputChange = (field: string, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const isCardValid =
    cardData.number && cardData.expiry && cardData.cvv && cardData.name;

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="card" className="font-medium">
                  Credit/Debit Card
                </Label>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="apple" id="apple" />
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="apple" className="font-medium">
                  Apple Pay
                </Label>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="paypal" id="paypal" />
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="paypal" className="font-medium">
                  PayPal
                </Label>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === "card" && (
        <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in">
          <h3 className="font-semibold mb-4">Card Information</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="text-sm font-medium">
                Card Number
              </Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardData.number}
                onChange={(e) =>
                  handleCardInputChange(
                    "number",
                    formatCardNumber(e.target.value),
                  )
                }
                maxLength={19}
                className="mt-1 shadow-input font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="expiry" className="text-sm font-medium">
                  Expiry Date
                </Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={(e) =>
                    handleCardInputChange(
                      "expiry",
                      formatExpiry(e.target.value),
                    )
                  }
                  maxLength={5}
                  className="mt-1 shadow-input font-mono"
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-sm font-medium">
                  CVV
                </Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cardData.cvv}
                  onChange={(e) =>
                    handleCardInputChange(
                      "cvv",
                      e.target.value.replace(/\D/g, "").substring(0, 4),
                    )
                  }
                  className="mt-1 shadow-input font-mono"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardName" className="text-sm font-medium">
                Cardholder Name
              </Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={cardData.name}
                onChange={(e) => handleCardInputChange("name", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "apple" && (
        <div className="bg-card rounded-2xl p-6 shadow-card text-center animate-fade-in">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Apple Pay</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use Touch ID or Face ID to complete your purchase securely
          </p>
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div className="bg-card rounded-2xl p-6 shadow-card text-center animate-fade-in">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold mb-2">PayPal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            You be redirected to PayPal to complete your payment
          </p>
        </div>
      )}

      <Button
        onClick={onNext}
        disabled={paymentMethod === "card" && !isCardValid}
        size="lg"
        className="w-full animate-scale-in"
      >
        {paymentMethod === "card"
          ? "Complete Payment"
          : `Pay with ${paymentMethod === "apple" ? "Apple Pay" : "PayPal"}`}
      </Button>
    </div>
  );
};
