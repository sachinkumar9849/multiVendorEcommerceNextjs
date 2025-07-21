import {
  ShoppingCart as ShoppingCartIcon,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  isOpen,
  onClose,
}: ShoppingCartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-elegant animate-fade-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">Cart ({itemCount})</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCartIcon
                  size={48}
                  className="mx-auto text-muted-foreground mb-4"
                />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-muted/30 rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-sm font-semibold">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-card border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-0 rounded-r-none"
                          >
                            <Minus size={12} />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 p-0 rounded-l-none"
                          >
                            <Plus size={12} />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-destructive hover:text-destructive h-8 w-8 p-0"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90 h-12 rounded-xl font-semibold">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
