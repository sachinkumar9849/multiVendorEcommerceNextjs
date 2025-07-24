import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 449.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
  },
  {
    id: 3,
    name: "Latest Smartphone",
    price: 899.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
const shipping = 9.99;
const tax = subtotal * 0.08;
const total = subtotal + shipping + tax;

export function OrderSummary() {
  return (
    <Card className="shadow-medium border-border/50 py-5">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-border/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="text-sm font-medium text-foreground">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>

        <div className="mt-4 rounded-lg bg-gradient-subtle p-3 bg-gray-100">
          <p className="text-sm text-muted-foreground text-center ">
            🔒 Secure checkout with SSL encryption
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
