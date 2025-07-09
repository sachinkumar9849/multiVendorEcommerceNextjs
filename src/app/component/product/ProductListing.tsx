import ProductCard, { Product } from "./ProductCard";
// import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 1247,
    badge: "Best Seller",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 892,
    badge: "New",
    category: "Fashion"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 1834,
    badge: "Featured",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 456,
    category: "Home & Garden"
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.4,
    reviewCount: 623,
    badge: "Eco-Friendly",
    category: "Fashion"
  },
  {
    id: 6,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 267,
    badge: "Pro Choice",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 543,
    badge: "Gaming",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 267,
    badge: "Pro Choice",
    category: "Electronics"
  },
  {
    id: 9,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 267,
    badge: "Pro Choice",
    category: "Electronics"
  },
  {
    id: 10,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 456,
    category: "Home & Garden"
  },
];

const ProductListing = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {products.slice(0, 10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;