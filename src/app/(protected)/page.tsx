import Image from "next/image";

import CategoryMenuHome from "../component/Home/CategoryMenuHome";
import HomePageBanner from "../component/Home/HomePageBanner";
import ProductImage from "../component/Home/ProductImage";
import ProductCategory from "../component/Home/ProductCategory";
import ProductImageSingle from "../component/Home/ProductImageSingle";
import ProductListing from "../component/product/ProductListing";
import Link from "next/link";
import ProductImageThree from "../component/Home/ProductImageThree";
import ProductListingNewItems from "../component/product/ProductListingNewItems";
import { FeaturesProduct } from "../component/product/FeaturesProduct";
import LatestProduct from "../component/product/LatestProduct";
import FreeDelivery from "../component/comman/FreeDelivery";
import TopRated from "../component/product/TopRated";
import ProductCategoryMobile from "../component/mobile/ProductCategoryMobile";
import ProductCategoryWrapper from "../component/product/Wrapper/ProductCategoryWrapper";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl md:px-0 px-4">
        <div className="grid md:grid-cols-10 grid-cols-1 gap-6">
          <div className="md:col-span-2 md:block hidden">
            <CategoryMenuHome />
          </div>
          <div className="md:col-span-6 col-span-1 md:mt-4">
            <HomePageBanner />
          </div>
          <div className="md:col-span-2 mt-4 md:block hidden">
            <ProductImage />
          </div>
        </div>
        <div className="grid md:grid-cols-10 grid-cols-1 gap-6 mb-7">
          <div className="col-span-2 md:block hidden">
            <ProductImageSingle />
          </div>
          <div className="col-span-8 md:mt-[-70px]">
            <ProductCategoryWrapper />
            <div className="banners banners1 pt-11 md:block hidden">
              <div className="b-img relative">
                <Link href="#">
                  <Image
                    src="/large1.jpg"
                    alt="img"
                    width={1920}
                    height={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6 mb-7">
          <div className="col-span-2">
            {/* top rated product  */}
            <div className="md:mt-[-111px]">
              <LatestProduct />
            </div>

            {/* top reated product  */}
          </div>
          <div className="col-span-8">
            <ProductListing />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6 mb-7">
          <div className="col-span-2">
            <div className="mt-[-200px]">
              <FreeDelivery />
            </div>
          </div>
          <div className="col-span-8">
            <ProductImageThree />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6 mb-7">
          <div className="col-span-2">
            <div className="mt-[-140px]">
              <TopRated />
            </div>
          </div>
          <div className="col-span-8">
            <ProductListingNewItems />
          </div>
        </div>
      </div>
      <FeaturesProduct />
    </>
  );
}
