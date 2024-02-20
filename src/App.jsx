import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/books-page/BooksPage";
import BookDetails from "./pages/book-details-page/BookDetails";

const App = () => {
  return (
    <>
      <Router>
        <div className="">
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
