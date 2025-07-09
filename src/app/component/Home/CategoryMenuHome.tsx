"use client";
import React, { useState } from 'react';
import { ChevronRight, Package, ShoppingBag, Zap, Bath, Heart, Home, Wrench, Bed, Factory, Plus } from 'lucide-react';

const CategoryMenuHome = () => {
  const [activeCategory, setActiveCategory] = useState(true);

  const categories = [
    {
      id: 'fashion',
      name: 'Fashion & Accessories',
      icon: <Package className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'FASHION': [
          'Accessories',
          'Bags',
          'Jewelry',
          "Men's Clothing",
          'Shoes'
        ],
        'ELECTRONICS': [
          'Asdipiscing',
          'Consectetur',
          'Diam sit'
        ],
        'TOWELS CLOUD': [
          'Appliances',
          'Furniture & Decors',
          'Lamp & Lighting',
          'Punge nenune',
          'Qunge genga'
        ],
       
      }
    },
    {
      id: 'bags',
      name: 'Bags & Shoes',
      icon: <ShoppingBag className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'BAGS': [
          'Backpacks',
          'Handbags',
          'Travel Bags',
          'Laptop Bags',
          'Clutches'
        ],
        'SHOES': [
          'Sneakers',
          'Formal Shoes',
          'Sandals',
          'Boots',
          'Sports Shoes'
        ],
        'ACCESSORIES': [
          'Belts',
          'Wallets',
          'Sunglasses',
          'Watches',
          'Jewelry'
        ]
      }
    },
    {
      id: 'electronics',
      name: 'Optimum Electronics',
      icon: <Zap className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'SMARTPHONES': [
          'iPhone',
          'Samsung',
          'OnePlus',
          'Google Pixel',
          'Xiaomi'
        ],
        'LAPTOPS': [
          'MacBook',
          'Dell',
          'HP',
          'Lenovo',
          'Asus'
        ],
        'AUDIO': [
          'Headphones',
          'Speakers',
          'Earbuds',
          'Sound Systems',
          'Microphones'
        ]
       
      }
    },
    {
      id: 'bathroom',
      name: 'Bathroom',
      icon: <Bath className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'FIXTURES': [
          'Faucets',
          'Showers',
          'Toilets',
          'Sinks',
          'Bathtubs'
        ],
        'ACCESSORIES': [
          'Towel Racks',
          'Mirrors',
          'Soap Dispensers',
          'Toilet Paper Holders',
          'Shower Curtains'
        ],
        'STORAGE': [
          'Cabinets',
          'Shelves',
          'Organizers',
          'Baskets',
          'Vanities'
        ]
      }
    },
    {
      id: 'health',
      name: 'Health & Beauty',
      icon: <Heart className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'SKINCARE': [
          'Cleansers',
          'Moisturizers',
          'Serums',
          'Sunscreen',
          'Face Masks'
        ],
        'MAKEUP': [
          'Foundation',
          'Lipstick',
          'Eyeshadow',
          'Mascara',
          'Brushes'
        ],
        'HEALTH': [
          'Vitamins',
          'Supplements',
          'First Aid',
          'Thermometers',
          'Blood Pressure'
        ]
      }
    },
    {
      id: 'home',
      name: 'Home & Lights',
      icon: <Home className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'LIGHTING': [
          'Ceiling Lights',
          'Table Lamps',
          'Floor Lamps',
          'Wall Sconces',
          'LED Bulbs'
        ],
        'DECOR': [
          'Wall Art',
          'Vases',
          'Candles',
          'Cushions',
          'Rugs'
        ],
        'KITCHEN': [
          'Appliances',
          'Cookware',
          'Tableware',
          'Storage',
          'Utensils'
        ]
      }
    },
    {
      id: 'metallurgy',
      name: 'Metallurgy',
      icon: <Wrench className="w-5 h-5" />,
      hasSubmenu: false
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      icon: <Bed className="w-5 h-5" />,
      hasSubmenu: true,
      subcategories: {
        'FURNITURE': [
          'Beds',
          'Dressers',
          'Nightstands',
          'Wardrobes',
          'Mirrors'
        ],
        'BEDDING': [
          'Sheets',
          'Pillows',
          'Comforters',
          'Blankets',
          'Mattresses'
        ],
        'DECOR': [
          'Curtains',
          'Lamps',
          'Wall Art',
          'Plants',
          'Storage'
        ]
      }
    },
    {
      id: 'industrial',
      name: 'Industrial Parts',
      icon: <Factory className="w-5 h-5" />,
      hasSubmenu: false
    }
  ];

  const handleMouseEnter = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category && category.hasSubmenu) {
      setActiveCategory(categoryId);
    }
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="flex bg-gray-50 ">
      {/* Left Sidebar */}
      <div className="w-full bg-white shadow-lg relative">
        {/* Header */}
      

        {/* Category List */}
        <div className="py-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                activeCategory === category.id ? 'bg-gray-50 border-r-4 border-orange-500' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center space-x-3">
                <span className={`${activeCategory === category.id ? 'text-orange-500' : 'text-gray-500'}`}>
                  {category.icon}
                </span>
                <span className={`text-sm font-medium ${activeCategory === category.id ? 'text-orange-500' : 'text-gray-700'}`}>
                  {category.name}
                </span>
              </div>
              {category.hasSubmenu && (
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                  activeCategory === category.id ? 'text-orange-500 transform rotate-90' : 'text-gray-400'
                }`} />
              )}
            </div>
          ))}
          
          {/* More Categories */}
          <div className="flex items-center space-x-3 px-4 py-3 cursor-pointer text-orange-500 hover:bg-orange-50 transition-colors">
            <Plus className="w-5 h-5" />
            <span className="text-sm font-medium">More Categories</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative">
        {/* Office Furniture Banner */}
        
     
        {activeCategory && (
          <div
            className="absolute top-0 left-0 w-[600px] h-full bg-white shadow-2xl z-10 p-8"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-3 gap-12 max-w-6xl">
              {Object.entries(categories.find(cat => cat.id === activeCategory)?.subcategories || {}).map(([sectionName, items]) => (
                <div key={sectionName} className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2">
                    {sectionName}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenuHome;