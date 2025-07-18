"use client";
import React from "react";
import ProductCategory from "../../Home/ProductCategory";
import { useMobileDetection } from "@/lib/hooks/useMobileDetection";

const ProductCategoryWrapper = () => {
  const isMobile = useMobileDetection();

  return <>{isMobile ? "" : <ProductCategory />}</>;
};

export default ProductCategoryWrapper;
