import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/books-page/BooksPage";
import BookDetails from "./pages/book-details-page/BookDetails";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
