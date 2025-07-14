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
}

const ProductCategoryMobile = () => {
  const categories: CategoryProps[] = [
    {
      id: 1,
      name: "Bathroom",
      image:
        "https://w7.pngwing.com/pngs/506/979/png-transparent-bathtub-shower-bathroom-computer-icons-bathtub-furniture-text-bathroom-thumbnail.png",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "Kitchen and Dining",
      image: "https://cdn-icons-png.flaticon.com/512/1198/1198253.png",
      bgColor: "bg-gray-50",
    },
    {
      id: 3,
      name: "Home Décor",
      image: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      name: "Home Storage and Organisation",
      image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
      bgColor: "bg-blue-50",
    },
    {
      id: 5,
      name: "Household Appliances",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
      bgColor: "bg-gray-50",
    },
    {
      id: 6,
      name: "Garden & Outdoor",
      image: "https://cdn-icons-png.flaticon.com/512/628/628283.png",
      bgColor: "bg-green-50",
    },
    {
      id: 7,
      name: "Furniture",
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
      bgColor: "bg-green-50",
    },
    {
      id: 8,
      name: "Lighting",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
      bgColor: "bg-yellow-50",
    },
    {
      id: 9,
      name: "Electronics",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087902.png",
      bgColor: "bg-purple-50",
    },
    {
      id: 10,
      name: "Sports & Fitness",
      image: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="mobilePadding">
      <div className="max-w-7xl mx-auto md:px-0 px-4">
        <div className="grid grid-cols-4  gap-2">
          {categories.slice(0, 7).map((category: CategoryProps) => (
            <div className="mx-auto text-center" key={category.id}>
              <div className="aspect-square mx-auto  rounded-full overflow-hidden shadow-sm h-[50px]">
                <div className="w-full  h-full flex items-center justify-center ">
                  <Link href="/product">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 object-contain p-2"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <Link href="/product">
                  <h3 className="text-[12px] mt-1 font-medium text-gray-900 text-center leading-tight">
                    {category.name.slice(0, 10)}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
          <Link href={""}>
            <div className="w-[50px] h-[50px] bg-[#ff3b1f] rounded-full flex items-center justify-center mx-auto text-center">
              <p className="categoryMobile">...</p>
            </div>
            <h3 className="text-[12px] mt-1 font-medium text-gray-900 text-center leading-tight">
              More
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryMobile;
