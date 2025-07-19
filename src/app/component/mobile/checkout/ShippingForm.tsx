"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

interface ShippingFormProps {
  onNext: () => void;
}

export const ShippingForm = ({ onNext }: ShippingFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.email &&
    formData.firstName &&
    formData.lastName &&
    formData.address &&
    formData.city &&
    formData.state &&
    formData.zipCode;

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="mt-1 shadow-input"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 shadow-input"
            />
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card">
        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-sm font-medium">
              Street Address
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="mt-1 shadow-input"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="city" className="text-sm font-medium">
                City
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
            <div>
              <Label htmlFor="state" className="text-sm font-medium">
                State
              </Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-sm font-medium">
                ZIP
              </Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="mt-1 shadow-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card">
        <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>
        <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="standard" id="standard" />
                <div>
                  <Label htmlFor="standard" className="font-medium">
                    Standard Shipping
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    5-7 business days
                  </p>
                </div>
              </div>
              <span className="font-semibold">$9.99</span>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="express" id="express" />
                <div>
                  <Label htmlFor="express" className="font-medium">
                    Express Shipping
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    2-3 business days
                  </p>
                </div>
              </div>
              <span className="font-semibold">$19.99</span>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="overnight" id="overnight" />
                <div>
                  <Label htmlFor="overnight" className="font-medium">
                    Overnight Shipping
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Next business day
                  </p>
                </div>
              </div>
              <span className="font-semibold">$29.99</span>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Link href="/order-confirmed-mobile">
        <Button
          onClick={onNext}
          disabled={!isFormValid}
          size="lg"
          className="w-full animate-scale-in bg-[#222f3e]"
        >
          Continue to Payment
        </Button>
      </Link>
    </div>
  );
};
