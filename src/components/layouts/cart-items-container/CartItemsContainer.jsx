import React, { useContext } from "react";
import { CartContext } from "../../../App";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <section className="">
      <div className="w-11/12 m-auto">
        {totalAmount === 0 ? (
          <h1 className="text-3xl font-bold pt-4">Currently your cart is empty</h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold pt-4">Cart</h1>

            {Array.isArray(cartItems) &&
              cartItems.map((item) => (
                <CartItemCard key={item.id} bookData={item} />
              ))}

            <h2 className="text-3xl font-bold pt-4">
              Total Amount = &#8377;{totalAmount}
            </h2>

            <button className="bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in rounded-lg p-4 mt-4 cursor-pointer text-white">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default CartItemsContainer;
