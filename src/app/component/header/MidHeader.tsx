"use client";
import { useState } from 'react';
import { ChevronDown, Star, ShoppingBag, Truck, Shield, Heart, Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// Import product images
import headphones from '@/assets/headphones.jpg';
import smartwatch from '@/assets/smartwatch.jpg';
import sneakers from '@/assets/sneakers.jpg';
import handbag from '@/assets/handbag.jpg';
import laptop from '@/assets/laptop.jpg';
import perfume from '@/assets/perfume.jpg';
// import { Button } from '../ui/button';
import Image from 'next/image';

interface MenuItem {
  id: string;
  name: string;
  subcategories: {
    title: string;
    items: string[];
  }[];
  featured?: {
    title: string;
    
    price: string;
    originalPrice?: string;
    rating: number;
    badge?: string;
  }[];
  promo?: {
    title: string;
    subtitle: string;
    
    cta: string;
  };
}

const menuItems: MenuItem[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    subcategories: [
      {
        title: 'Computers & Tablets',
        items: ['Laptops', 'Desktop Computers', 'Tablets', 'Monitors', 'Accessories']
      },
      {
        title: 'Audio & Video',
        items: ['Headphones', 'Speakers', 'Cameras', 'TVs', 'Gaming']
      },
      {
        title: 'Mobile & Wearables',
        items: ['Smartphones', 'Smart Watches', 'Fitness Trackers', 'Cases', 'Chargers']
      }
    ],
    featured: [
      {
        title: 'Premium Headphones',
      
        price: '$299',
        originalPrice: '$399',
        rating: 4.8,
        badge: 'Best Seller'
      },
      {
        title: 'Smart Watch Pro',
      
        price: '$449',
        rating: 4.9,
        badge: 'New'
      },
      {
        title: 'Ultra Laptop',
       
        price: '$1,299',
        rating: 4.7
      }
    ],
    promo: {
      title: 'Tech Week Sale',
      subtitle: 'Up to 50% off on electronics',
  
      cta: 'Shop Now'
    }
  },
  {
    id: 'fashion',
    name: 'Fashion',
    subcategories: [
      {
        title: 'Women\'s Fashion',
        items: ['Dresses', 'Tops', 'Bottoms', 'Shoes', 'Accessories']
      },
      {
        title: 'Men\'s Fashion',
        items: ['Shirts', 'Pants', 'Jackets', 'Shoes', 'Accessories']
      },
      {
        title: 'Bags & Accessories',
        items: ['Handbags', 'Backpacks', 'Wallets', 'Jewelry', 'Watches']
      }
    ],
    featured: [
      {
        title: 'Premium Leather Bag',
       
        price: '$189',
        originalPrice: '$249',
        rating: 4.6,
        badge: 'Limited'
      },
      {
        title: 'Sport Sneakers',
       
        price: '$129',
        rating: 4.8
      }
    ],
    promo: {
      title: 'Spring Collection',
      subtitle: 'Fresh styles for the season',
     
      cta: 'Explore'
    }
  },
  {
    id: 'beauty',
    name: 'Beauty',
    subcategories: [
      {
        title: 'Skincare',
        items: ['Cleansers', 'Moisturizers', 'Serums', 'Masks', 'Treatments']
      },
      {
        title: 'Makeup',
        items: ['Face', 'Eyes', 'Lips', 'Tools', 'Sets']
      },
      {
        title: 'Fragrance',
        items: ['Perfumes', 'Colognes', 'Body Sprays', 'Gift Sets', 'Travel Size']
      }
    ],
    featured: [
      {
        title: 'Luxury Perfume',
       
        price: '$85',
        rating: 4.9,
        badge: 'Exclusive'
      }
    ],
    promo: {
      title: 'Beauty Week',
      subtitle: 'Premium beauty products',
    
      cta: 'Shop Beauty'
    }
  },
  {
    id: 'home',
    name: 'Home & Garden',
    subcategories: [
      {
        title: 'Home Decor',
        items: ['Furniture', 'Lighting', 'Rugs', 'Wall Art', 'Mirrors']
      },
      {
        title: 'Kitchen & Dining',
        items: ['Cookware', 'Appliances', 'Tableware', 'Storage', 'Gadgets']
      },
      {
        title: 'Garden & Outdoor',
        items: ['Plants', 'Tools', 'Furniture', 'Lighting', 'Decor']
      }
    ],
    featured: [],
    promo: {
      title: 'Home Refresh',
      subtitle: 'Transform your space',
    
      cta: 'Shop Home'
    }
  }
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuEnter = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="relative z-50">
      {/* Main Navigation */}
      <nav className="bg-background border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ShopMega
                </h1>
              </div>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.id)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className="text-white flex items-center space-x-1 text-ecom-dark hover:text-ecom-primary transition-colors duration-200 font-medium">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            
          </div>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {activeMenu && (
        <div
          className="megaMenu bg-white absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 shadow-mega z-40 animate-mega-slide-down"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
            {menuItems
              .filter((item) => item.id === activeMenu)
              .map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-8">
                  {/* Categories */}
                  <div className="col-span-8">
                    <div className="grid grid-cols-3 gap-8">
                      {item.subcategories.map((category, idx) => (
                        <div key={idx} className="space-y-4">
                          <h3 className="font-semibold text-ecom-dark text-lg border-b border-ecom-primary/20 pb-2">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <a
                                  href="#"
                                  className="text-muted-foreground hover:text-ecom-primary transition-colors duration-200 text-sm"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Products & Promo */}
                  <div className="col-span-4 space-y-6">
                    {/* Featured Products */}
                    {item.featured && item.featured.length > 0 && (
                      <div className="bg-gradient-card rounded-xl p-6 border border-border/40">
                        <h3 className="font-semibold text-ecom-dark mb-4">Featured Products</h3>
                        <div className="space-y-4">
                          {item.featured.map((product, idx) => (
                            <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                              <div className="relative">
                                {/* <Image
                                  src={product.image || ""}
                                  alt={product.title}
                                  className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                                /> */}
                                {/* {product.badge && (
                                  <Badge
                                    variant="secondary"
                                    className="absolute -top-2 -right-2 text-xs bg-ecom-secondary text-white"
                                  >
                                    {product.badge}
                                  </Badge>
                                )} */}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm text-ecom-dark group-hover:text-ecom-primary transition-colors">
                                  {product.title}
                                </h4>
                                <div className="flex items-center space-x-1 mt-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="font-semibold text-ecom-primary">{product.price}</span>
                                  {product.originalPrice && (
                                    <span className="text-xs text-muted-foreground line-through">
                                      {product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Promo Section */}
                    {item.promo && (
                      <div className="bg-gradient-primary rounded-xl p-6 text-white relative overflow-hidden">
                        <div className="relative z-10">
                          <h3 className="font-bold text-xl mb-2">{item.promo.title}</h3>
                          <p className="text-white/90 mb-4">{item.promo.subtitle}</p>
                          {/* <Button
                            variant="secondary"
                            className="bg-white text-ecom-primary hover:bg-white/90"
                          >
                            {item.promo.cta}
                          </Button> */}
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                          {/* <Image
                            src={item.promo.image || ""}
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          /> */}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4 text-ecom-primary" />
                        <span>Free shipping on orders over $50</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-ecom-primary" />
                        <span>30-day return policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}