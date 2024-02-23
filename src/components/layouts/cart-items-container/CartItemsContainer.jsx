import React, { useContext } from "react";
import { CartContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import StripeCheckout from "react-stripe-checkout";

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const stripeKey =
    "pk_test_51OmrCISEAvMIcOR1QDwb7GOWS8DNPpwXQl78TSNJXX9iGd8l1CwIbiu4XkZga1bK7U2uM8DLupBS1KUvSFH57si600UiAl8oxW";
  const onToken = (token) => {
    console.log(token);
    alert("Your Payment has been processed");
    navigate("/books");
  };

  return (
    <section className="">
      <div className="w-11/12 m-auto">
        {totalAmount === 0 ? (
          <h1 className="text-3xl font-bold pt-4">
            Currently your cart is empty
          </h1>
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

            <StripeCheckout
              name="Book Checkout"
              description="Please fill in the details below"
              amount={totalAmount * 100}
              currency="INR"
              stripeKey={stripeKey}
              token={onToken}
              billingAddress
            >
              <button className="bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in rounded-lg p-4 mt-4 cursor-pointer text-white">
                Proceed to Checkout
              </button>
            </StripeCheckout>
          </>
        )}
      </div>
    </section>
  );
};

export default CartItemsContainer;
