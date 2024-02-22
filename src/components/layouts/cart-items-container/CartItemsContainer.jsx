import React, { useContext } from "react";
import { CartContext } from "../../../App";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";

const CartItemsContainer = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="">
      <div className="w-11/12 m-auto">
        <h1 className="text-3xl font-bold pt-4">Cart</h1>

        {Array.isArray(cartItems) &&
          cartItems.map((item) => (
            <CartItemCard key={item.id} bookData={item} />
          ))}
      </div>
    </section>
  );
};

export default CartItemsContainer;
