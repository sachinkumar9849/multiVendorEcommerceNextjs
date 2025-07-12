export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
}

export const wishlistProducts: Product[] = [
  {
    id: "1",
    name: "Premium Smartphone Pro Max",
    price: 899.99,
    originalPrice: 1099.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/8-270x270.jpg",
    rating: 4.8,
    category: "Electronics",
    inStock: true,
  },
  {
    id: "2",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/13-270x270.jpg",
    rating: 4.7,
    category: "Audio",
    inStock: true,
  },
  {
    id: "3",
    name: "MacBook Pro 16-inch",
    price: 2399.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/3-270x270.jpg",
    rating: 4.9,
    category: "Computers",
    inStock: false,
  },
  {
    id: "4",
    name: "Smart Watch Series 9",
    price: 429.99,
    originalPrice: 499.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/20-270x270.jpg",
    rating: 4.6,
    category: "Wearables",
    inStock: true,
  },
  {
    id: "5",
    name: "Professional Camera Lens 85mm",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.8,
    category: "Photography",
    inStock: true,
  },
  {
    id: "6",
    name: "Bluetooth Portable Speaker",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.5,
    category: "Audio",
    inStock: true,
  },
];
