import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import SearchInputForm from "../../components/forms/searchInputForm/SearchInputForm";
import ProductListingAll from "../../components/layouts/productlistingall/ProductListingAll";

const BooksPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="flex flex-col lg:flex-rowjustify-center items-center pt-4">
        <h2 className="text-center pb-4">
          Find the <span className="text-[#fb995d]">Books</span> that you want
        </h2>
        <SearchInputForm darkTheme={false} />
      </div>
      <ProductListingAll />
      <Footer />
    </section>
  );
};

export default BooksPage;
