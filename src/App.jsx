import React, { useEffect, createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/books-page/BooksPage";
import BookDetails from "./pages/book-details-page/BookDetails";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import app from "./firebase/Firebase";
import CartPage from "./components/layouts/cart-page/CartPage";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/search-page/SearchPage";

export const UserContext = createContext({});
export const CartContext = createContext([]);

const App = () => {
  const auth = getAuth(app);

  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + parseInt(item.price);
    });

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <>
      <Router>
        <ScrollToTop>
          <UserContext.Provider value={authenticatedUser}>
            <CartContext.Provider
              value={{ cartItems, totalAmount, setCartItems }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </CartContext.Provider>
          </UserContext.Provider>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
