import { ChevronDown, Menu } from "lucide-react";
import React from "react";
import SearchButton from "./SearchButton";
import IconButtons from "./IconButtons";

const SearchCategories = () => {
  return (
    <div className="mx-auto max-w-7xl md:px-0 px-4">
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-2">
          <div className="headerCategories relative px-3  flex items-center py-2 text-[16px]block text-white rounded-tr-[3px] rounded-tl-[3px] bg-[#ff3c20] font-bold uppercase">
            <Menu size={23} strokeWidth={4} />

            <div className="flex ml-2 w-full items-center justify-between">
              <p className="">All Categories</p>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <SearchButton />
        </div>
        <div className="col-span-3">
          <IconButtons />
        </div>
      </div>
    </div>
  );
};

export default SearchCategories;
