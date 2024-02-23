import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = ({ bookData }) => {
  return (
    <section className="flex my-8 p-8 border-2 border-slate-400 rounded-lg">
      <div>
        <img src={bookData.book_url} alt="cart-image" className="w-36" />
      </div>
      <div className="pl-8 pt-2">
        <h2 className="text-2xl font-bold">{bookData.book_name}</h2>
        <p className="pt-2 pb-10">{bookData.author_name}</p>
        <Link to={`/book-details/${bookData.id}`} className="bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in rounded-lg p-4 mt-4 cursor-pointer text-white">Product Details</Link>
      </div>
    </section>
  );
};

export default SearchResultCard;
