import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductGrid = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 234,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "Electronics",
      brand: "Sony",
      inStock: true,
      isSale: true,
    },
    {
      id: "2",
      name: "Premium Running Shoes",
      price: 149.99,
      rating: 4.8,
      reviewCount: 567,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      category: "Sports",
      brand: "Nike",
      inStock: true,
      isNew: true,
    },
    {
      id: "3",
      name: "Smart Watch Series 9",
      price: 399.99,
      rating: 4.7,
      reviewCount: 189,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      category: "Electronics",
      brand: "Apple",
      inStock: false,
    },
    {
      id: "4",
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.3,
      reviewCount: 92,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      category: "Clothing",
      brand: "Adidas",
      inStock: true,
      isSale: true,
    },
    {
      id: "5",
      name: "Coffee Maker Deluxe",
      price: 199.99,
      rating: 4.6,
      reviewCount: 156,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      category: "Home",
      brand: "Samsung",
      inStock: true,
    },
    {
      id: "6",
      name: "Gaming Mechanical Keyboard",
      price: 129.99,
      rating: 4.4,
      reviewCount: 301,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      category: "Electronics",
      brand: "Sony",
      inStock: true,
      isNew: true,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-warning fill-warning"
            : i < rating
              ? "text-warning fill-warning opacity-50"
              : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="flex-1">
      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground">
            Showing {products.length} results
          </p>
        </div>
        <select className="px-3 py-2 border border-border rounded-md bg-background text-foreground">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Rating</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.isNew && (
                  <Badge className="bg-success text-white">New</Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-destructive text-white">Sale</Badge>
                )}
                {!product.inStock && (
                  <Badge variant="secondary">Out of Stock</Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="p-4">
              {/* Brand */}
              <p className="text-sm text-muted-foreground mb-1">
                {product.brand}
              </p>

              {/* Product Name */}
              <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button
                className="w-full"
                disabled={!product.inStock}
                variant={product.inStock ? "default" : "secondary"}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;
