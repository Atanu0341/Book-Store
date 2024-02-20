import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetails from "./pages/bookdetailspage/BookDetails";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-red-200">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
