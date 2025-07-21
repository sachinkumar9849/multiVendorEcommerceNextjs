import Link from "next/link";
import { ProductCard, Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  categoryName: string;
}

export const ProductGrid = ({ products, categoryName }: ProductGridProps) => {
  return (
    <div className="flex-1 bg-background p-4 overflow-y-auto">
      <div className="mb-1">
        <h2 className="text-[17px] font-bold text-foreground mb-0">
          All {categoryName}
        </h2>
        <div className="h-1 w-12 bg-gradient-category rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 auto-rows-max">
        {products.map((product, index) => (
          <Link href="/ProductDetail" key={product.id}>
            <div
              className="animate-in fade-in-0 slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <ProductCard {...product} />
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <p className="text-muted-foreground">
              No products found in this category
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
