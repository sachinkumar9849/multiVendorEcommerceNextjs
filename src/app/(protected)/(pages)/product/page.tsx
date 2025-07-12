import FilterSidebar from "@/app/component/product/productList/FilterSidebar";
import ProductGrid from "@/app/component/product/productList/ProductGrid";
import React from "react";

const page = () => {
  return (
    <div className="padding">
      <div className="mx-auto max-w-7xl md:px-0 px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <FilterSidebar />
          </div>
          <div className="col-span-9">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
