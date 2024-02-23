import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookData } from "../../util/BookData";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let searchValue = [];
    searchValue = BookData.filter((data) =>
      data.book_name.toLowerCase().includes(location.state.toLowerCase())
    );
    setSearchResult(searchValue);
  }, []);

  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="py-20">
        <div className="w-11/12 m-auto">
          <h2 className="text-3xl font-bold pt-4">Your Search Result</h2>
          {
            searchResult.map((result)=>(
                <SearchResultCard key={result.id} bookData={result} />
            ))
          }
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
