"use client";
import { useState } from "react";
// import { CategorySidebar, defaultCategories } from './CategorySidebar';
import { sampleProducts } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { CategorySidebar, defaultCategories } from "./CategorySidebar";
// import { ProductGrid } from './ProductGrid';
// import { sampleProducts } from './ProductCard';

export const CategoryLayout = () => {
  const [activeCategory, setActiveCategory] = useState("mobiles");

  const currentProducts = sampleProducts[activeCategory] || [];
  const categoryName =
    defaultCategories.find((cat) => cat.id === activeCategory)?.name ||
    "Products";

  return (
    <div className="h-screen flex bg-background">
      <CategorySidebar
        categories={defaultCategories}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />
      <ProductGrid products={currentProducts} categoryName={categoryName} />
    </div>
  );
};
