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
              src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
              data-src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
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
              src="https://i.pinimg.com/736x/74/21/8d/74218d175aa08fad769d910bdf5be230.jpg"
              data-src="https://i.pinimg.com/736x/74/21/8d/74218d175aa08fad769d910bdf5be230.jpg"
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
