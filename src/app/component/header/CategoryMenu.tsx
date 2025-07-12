"use client";
import Link from "next/link";
import { useState } from "react";

const CategoryMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const categories = {
    "Gifts & Toys": [
      "Electronics",
      "Fashion & Accessories",
      "Bags & Shoes",
      "Optimum Electronics",
      "Bathroom",
      "Health & Beauty",
      "Home & Lights",
      "Metallurgy",
      "Bedroom",
    ],
    SMARTPHONE: ["Esdipiscing", "Scanners", "Apple", "Dell", "Scanners"],
    ELECTRONICS: ["Asdipiscing", "Diam sit", "Labore et Monitors"],
    "TOWELS CLOUD": [
      "Sofa & Chairs",
      "Furniture & Decors",
      "Lamp & Lighting",
      "Sound & Life",
      "Punge menune",
      "Smartphone",
      "Appliances",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap gap-4">
        {Object.entries(categories).map(([category, subcategories]) => (
          <div
            key={category}
            className="relative group"
            onMouseEnter={() => setActiveMenu(category)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md font-medium transition-colors">
              {category}
            </button>

            {activeMenu === category && (
              <div className="absolute left-0 mt-2 w-56  shadow-lg rounded-md border border-gray-200">
                <div className="p-2">
                  <h3 className="px-3 py-1 font-semibold text-gray-700 border-b border-gray-100">
                    {category}
                  </h3>
                  <ul className="py-1">
                    {subcategories.map((subcategory) => (
                      <li key={subcategory}>
                        <Link
                          href="/product"
                          className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded"
                        >
                          {subcategory}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
