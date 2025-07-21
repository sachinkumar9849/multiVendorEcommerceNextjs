"use client";
import { useState, useMemo } from "react";
import { ShoppingCart as ShoppingCartIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import product images

import { ProductCard } from "./ProductCard";
import { SearchAndFilters } from "./SearchAndFilters";
import { ShoppingCart } from "./ShoppingCart";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/11/2a6f9999-41e1-4c51-b54a-4b5fb14fb4d9_560379_1.png",
    rating: 4.8,
    reviews: 124,
    category: "audio",
    isSale: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/1/28/f9e294ae-6905-4de6-804a-9cd9cb6a0579_355946_1.png",
    rating: 4.6,
    reviews: 89,
    category: "wearables",
    isNew: true,
  },
  {
    id: "3",
    name: "Flagship Smartphone",
    price: 899,
    originalPrice: 999,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/20/aed01105-38e2-4456-b3bc-a289afd8f0c7_637581_1.png",
    rating: 4.9,
    reviews: 267,
    category: "mobile",
    isSale: true,
  },
  {
    id: "4",
    name: 'MacBook Pro 14"',
    price: 1999,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/11/2a6f9999-41e1-4c51-b54a-4b5fb14fb4d9_560379_1.png",
    rating: 4.7,
    reviews: 156,
    category: "computers",
  },
  {
    id: "5",
    name: "Professional Camera",
    price: 1299,
    originalPrice: 1499,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/11/2a6f9999-41e1-4c51-b54a-4b5fb14fb4d9_560379_1.png",
    rating: 4.8,
    reviews: 78,
    category: "cameras",
    isSale: true,
  },
  {
    id: "6",
    name: "Athletic Sneakers",
    price: 159,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/11/2a6f9999-41e1-4c51-b54a-4b5fb14fb4d9_560379_1.png",
    rating: 4.5,
    reviews: 203,
    category: "footwear",
    isNew: true,
  },
];

const ProductList = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(mockProducts.map((p) => p.category)));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = mockProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  // Cart functions
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCartIcon size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="text-center py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Discover Amazing
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shop the latest tech products with premium quality and great prices
          </p>
        </div>

        {/* Search and Filters */}
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={categories}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No products found
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("featured");
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 animate-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.has(product.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Shopping Cart */}
      <ShoppingCart
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default ProductList;
