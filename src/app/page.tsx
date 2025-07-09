import Image from "next/image";

import CategoryMenuHome from "./component/Home/CategoryMenuHome";
import HomePageBanner from "./component/Home/HomePageBanner";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl md:px-0 px-4">
      <div className="grid grid-cols-10 gap-6">
      <div className="col-span-2">
        <CategoryMenuHome/>
      </div>
      <div className="col-span-6 mt-4">
        <HomePageBanner/>
      </div>
     
    </div>
    </div>
  );
}
