interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

interface ProductSummaryProps {
  products: Product[];
}

export const ProductSummary = ({ products }: ProductSummaryProps) => {
  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="absolute bg-[#ff3b1f] -top-2 -right-2  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {product.quantity}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{product.name}</h3>
              {product.variant && (
                <p className="text-xs text-muted-foreground">
                  {product.variant}
                </p>
              )}
              <p className="text-sm font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-border pt-3">
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
