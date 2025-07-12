import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Lock, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface CheckoutFormProps {
  onNext: () => void;
}

export function CheckoutForm({ onNext }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    sameAsShipping: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onNext();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <Card className="shadow-medium border-border/50 py-5">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold">
            <Mail className="mr-2 h-5 w-5  text-[#ff3b1f]" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
                className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Information */}
      <Card className="shadow-medium border-border/50 py-5">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold">
            <MapPin className="mr-2 h-5 w-5 text-[#ff3b1f]" />
            Shipping Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="John"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Doe"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street"
                className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Kathmandu Nepal"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Select
                  onValueChange={(value) => handleInputChange("state", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">Kathmandu Nepal</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                    <SelectItem value="fl">Florida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="10001"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card className="shadow-medium border-border/50 py-5">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold">
            <CreditCard className="mr-2 h-5 w-5 text-[#ff3b1f]" />
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card number</Label>
              <Input
                id="cardNumber"
                value={formData.cardNumber}
                onChange={(e) =>
                  handleInputChange("cardNumber", e.target.value)
                }
                placeholder="1234 5678 9012 3456"
                className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry date</Label>
                <Input
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) =>
                    handleInputChange("expiryDate", e.target.value)
                  }
                  placeholder="MM/YY"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                  placeholder="123"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <Label htmlFor="nameOnCard">Name on card</Label>
                <Input
                  id="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={(e) =>
                    handleInputChange("nameOnCard", e.target.value)
                  }
                  placeholder="John Doe"
                  className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sameAsShipping"
                checked={formData.sameAsShipping}
                onCheckedChange={(checked) =>
                  handleInputChange("sameAsShipping", checked as boolean)
                }
              />
              <Label htmlFor="sameAsShipping" className="text-sm">
                Billing address same as shipping
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Link href="/success">
        <Button
          type="submit"
          className="w-full bg-[#010101] hover:opacity-90 text-lg py-6 transition-all duration-300 hover:shadow-large"
        >
          <Lock className="mr-2 h-5 w-5" />
          Complete Order
        </Button>
      </Link>
      <p className="text-center text-sm text-muted-foreground">
        By placing your order, you agree to our{" "}
        <a href="#" className="text-[#ff3b1f] hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#ff3b1f] hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
