import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CartItemsContainer from "../cart-items-container/CartItemsContainer";

const CartPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <CartItemsContainer />
      <Footer />
    </section>
  );
};

export default CartPage;
