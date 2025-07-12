import React from "react";

const ProductImage = () => {
  return (
    <>
      <div className="banners banners1">
        <div className="b-img relative">
          <a href="#">
            <img
              data-sizes="auto"
              className="lazyautosizes lazyloaded h-[153px]"
              src="https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/catalog/banners/banner1.jpg"
              data-src="https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/catalog/banners/banner1.jpg"
              alt="banner"
              sizes="293px"
            />
          </a>
        </div>
        <div className="b-img2 relative">
          <a href="#">
            <img
              data-sizes="auto"
              className="lazyautosizes lazyloaded h-[153px]"
              src="https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/catalog/banners/banner2.jpg"
              data-src="https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/catalog/banners/banner2.jpg"
              alt="banner"
              sizes="293px"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
