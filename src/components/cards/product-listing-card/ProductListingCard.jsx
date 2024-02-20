import React from "react";

const ProductListingCard = ({ bookData }) => {
  // Check if bookData is defined
  if (!bookData) {
    // You can return a placeholder or handle this case accordingly
    return <div>Error: Book data not available</div>;
  }

  // Check if the required properties are available
  const { book_url, book_name, author_name, price } = bookData;
  if (!book_url || !book_name || !author_name || !price) {
    // You can return a placeholder or handle this case accordingly
    return <div>Error: Incomplete book data</div>;
  }

  return (
    <div className="border border-blue-200 w-full p-8 rounded-lg">
      <div className="flex justify-center items-center w-full h-80">
        <img
          src={book_url}
          alt="product-listing-image"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="pt-8 ">
        <h3 className="text-xl font-bold">{book_name}</h3>
        <p className="py-2 text-sm">{author_name}</p>
        <p className="text-xl font-bold text-[#fb995d]">&#8377;{price}</p>
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
