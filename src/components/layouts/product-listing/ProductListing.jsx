import React from "react";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

const ProductListing = () => {
  return (
    <div className="mt-[5%]">
      <div className="w-11/12 m-auto">
        <h2 className="text-2xl font-bold">
          Here are some <span className="text-[#fb995d]">books</span> that you
          might like
        </h2>

        <div className="pt-11 flex flex-col lg:flex-row justify-between items-center gap-4">
          <ProductListingCard />
          <ProductListingCard />
          <ProductListingCard />
          <ProductListingCard />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
