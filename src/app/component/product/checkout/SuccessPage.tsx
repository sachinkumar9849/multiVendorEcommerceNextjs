import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, ArrowLeft } from "lucide-react";

interface SuccessPageProps {
  onReset: () => void;
}

export function SuccessPage({ onReset }: SuccessPageProps) {
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const estimatedDelivery = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="shadow-large border-success/20 bg-gradient-subtle">
        <CardContent className="p-8">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully
              processed.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 mb-6 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Order Details
                </h3>
                <p className="text-sm text-muted-foreground">
                  Order number:{" "}
                  <span className="font-mono text-foreground">
                    {orderNumber}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Total:{" "}
                  <span className="font-semibold text-foreground">
                    $1,789.05
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Delivery Information
                </h3>
                <p className="text-sm text-muted-foreground">
                  Estimated delivery:{" "}
                  <span className="font-semibold text-foreground">
                    {estimatedDelivery}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Shipping method:{" "}
                  <span className="text-foreground">Standard delivery</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Mail className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">
                Confirmation email sent
              </span>
            </div>
            <div className="flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Package className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">
                Order being prepared
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={onReset}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
            <p className="text-sm text-muted-foreground">
              Need help? Contact our{" "}
              <a href="#" className="text-primary hover:underline">
                customer support
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
