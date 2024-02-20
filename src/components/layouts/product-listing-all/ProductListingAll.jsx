import React from "react";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

const ProductListingAll = () => {
  return (
    <section className="pt-20">
      <div className="w-11/12 m-auto ">
        <div className="flex flex-wrap -mx-2">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 py-8 px-2"
            >
              <ProductListingCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
