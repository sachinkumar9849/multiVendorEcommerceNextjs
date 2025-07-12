"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionTitle from "../comman/SectionTitle";
import Link from "next/link";

interface CategoryProps {
  id: number;
  name: string;
  image: string;
  bgColor: string;
  hoverColor: string;
}

const ProductCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories: CategoryProps[] = [
    {
      id: 1,
      name: "Bathroom",
      image: "https://cdn-icons-png.flaticon.com/512/1190/1190034.png",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 2,
      name: "Kitchen and Dining",
      image: "https://cdn-icons-png.flaticon.com/512/1198/1198253.png",
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
    },
    {
      id: 3,
      name: "Home Décor",
      image: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 4,
      name: "Home Storage and Organisation",
      image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 5,
      name: "Household Appliances",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
    },
    {
      id: 6,
      name: "Garden & Outdoor",
      image: "https://cdn-icons-png.flaticon.com/512/628/628283.png",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 7,
      name: "Furniture",
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
      bgColor: "bg-amber-50",
      hoverColor: "hover:bg-amber-100",
    },
    {
      id: 8,
      name: "Lighting",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
    },
    {
      id: 9,
      name: "Electronics",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087902.png",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 10,
      name: "Sports & Fitness",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4">
      <SectionTitle title="Top Category" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category: CategoryProps) => (
          <div
            key={category.id}
            className={`flex justify-center items-center flex-col relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${category.bgColor} ${category.hoverColor}`}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="aspect-square bg-white rounded-lg mx-4 mt-4 mb-2 overflow-hidden shadow-sm h-[50px]">
              <div className="w-full  h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <Link href="/product">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="px-4 pb-4">
              <Link href="/product">
                <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {category.name}
                </h3>
              </Link>
            </div>

            <div
              className={`absolute top-2 right-2 transition-opacity duration-300 ${
                hoveredCategory === category.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </div>

            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                hoveredCategory === category.id ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
