import { ProductCard } from "./ProductCard";
import SectionTitle from "../comman/SectionTitle";

interface FeaturesProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;

  badge: string;
  category: string;
}

export const products: FeaturesProductProps[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/8-270x270.jpg",
    rating: 4.8,

    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/13-270x270.jpg",
    rating: 4.7,

    badge: "Featured",
    category: "Electronics",
    originalPrice: 0,
  },
  {
    id: "3",
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/3-270x270.jpg",
    rating: 4.6,

    badge: "Gaming",
    category: "Electronics",
  },

  {
    id: "4",
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 249.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/20-270x270.jpg",
    rating: 4.6,

    badge: "New",
    category: "Fashion",
  },
  {
    id: "5",
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.4,

    badge: "Eco-Friendly",
    category: "Fashion",
    originalPrice: 0,
  },
  {
    id: "6",
    name: "Luxury Bamboo Towel Set",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.5,

    badge: "Eco-Friendly",
    category: "Bathroom",
  },
  {
    id: "7",
    name: "Modern Shower Caddy",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.3,

    category: "Bathroom",
    originalPrice: 0,
    badge: "",
  },
  {
    id: "8",
    name: "LED Bathroom Mirror",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.7,

    badge: "New",
    category: "Bathroom",
  },
];
export const FeaturesProduct = () => {
  return (
    <div className="bg-gray-300 padding">
      <div className="mx-auto max-w-7xl md:px-0 px-4">
        <SectionTitle title="Recommendations for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
