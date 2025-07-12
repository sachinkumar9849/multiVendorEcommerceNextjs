import React from "react";
import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import SearchCategories from "./SearchCategories";

const Nav = () => {
  return (
    <div className="bg-[#222f3e] pb-[10px]">
      <TopHeader />
      <MidHeader />
      <SearchCategories />
    </div>
  );
};

export default Nav;
