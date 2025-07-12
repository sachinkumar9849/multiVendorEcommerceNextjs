"use client";
import { useState } from "react";

import { wishlistProducts } from "@/app/component/data/wishlistData";

import { cn } from "@/lib/utils";
import { WishlistCard } from "@/app/component/product/wishlistCart.tsx/WishlistCard";
import { WishlistHeader } from "@/app/component/product/wishlistCart.tsx/WishlistHeader";

const WishlistPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(
    new Set(wishlistProducts.map((p) => p.id)),
  );

  const filteredProducts = wishlistProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleWishlistToggle = (productId: string) => {
    const newWishlistedItems = new Set(wishlistedItems);

    if (newWishlistedItems.has(productId)) {
      newWishlistedItems.delete(productId);
    } else {
      newWishlistedItems.add(productId);
    }

    setWishlistedItems(newWishlistedItems);
  };

  const handleAddToCart = () => {};

  const wishlistedProducts = filteredProducts.filter((product) =>
    wishlistedItems.has(product.id),
  );

  return (
    <div className="padding bg-gradient-background">
      <div className="container mx-auto px-4 ">
        <WishlistHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalItems={wishlistedProducts.length}
        />

        {wishlistedProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center opacity-20">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {searchQuery ? "No items found" : "Your wishlist is empty"}
              </h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? "Try adjusting your search criteria"
                  : "Start adding items to your wishlist to see them here"}
              </p>
            </div>
          </div>
        )}

        {wishlistedProducts.length > 0 && (
          <div
            className={cn(
              "mt-8 gap-6 animate-fade-in",
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "flex flex-col space-y-4",
            )}
          >
            {wishlistedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WishlistCard
                  product={product}
                  isWishlisted={wishlistedItems.has(product.id)}
                  onWishlistToggle={handleWishlistToggle}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
