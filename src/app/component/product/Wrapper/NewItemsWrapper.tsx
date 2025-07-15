"use client";
import React from "react";
import { useMobileDetection } from "@/lib/hooks/useMobileDetection";
import ProductListingNewItems from "../ProductListingNewItems";
import ProductListingNewItemsMobile from "../../mobile/ProductListingNewItemsMobile";

const NewItemsWrapper = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      {isMobile ? <ProductListingNewItemsMobile /> : <ProductListingNewItems />}
    </>
  );
};

export default NewItemsWrapper;
