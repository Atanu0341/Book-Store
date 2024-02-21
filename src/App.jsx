import React, { useEffect, createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/books-page/BooksPage";
import BookDetails from "./pages/book-details-page/BookDetails";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/Firebase";
import CartPage from "./components/layouts/cart-page/CartPage";

export const UserContext = createContext({});

const App = () => {
  const auth = getAuth(app);

  const [authenticatedUser,  setAuthenticatedUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={authenticatedUser}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;
