import React from "react";
import ProductImage from "../../../assets/books-images/harry-potter.jpg";

const ProductListingCard = () => {
  return (
    <div className="border border-blue-200 w-fit p-8 rounded-lg">
      <div className="flex justify-center items-center">
        <img src={ProductImage} alt="product-listing-image" className="w-2/3" />
      </div>

      <div className="pt-8 ">
        <h3 className="text-xl font-bold">
          Harry Potter and the Philosopher's Stone
        </h3>
        <p className="py-2 text-sm">J. K. Rowling</p>
        <p className="text-xl font-bold text-[#fb995d]">&#8377; 353</p>
        <a
          href="#"
          className="bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in mt-3 inline-block w-full py-4 text-center text-white"
        >
          Button
        </a>
      </div>
    </div>
  );
};

export default ProductListingCard;
