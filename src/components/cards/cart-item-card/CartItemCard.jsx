import React, { useContext } from "react";
import { CartContext } from "../../../App";

const CartItemCard = ({ bookData }) => {

    const {cartItems, setCartItems} = useContext(CartContext) 

  const handleRemove = () => {
    console.log(bookData.id);
    setCartItems(cartItems.filter((item)=> item.id !== bookData.id));

  };


  return (
    <section className="flex my-8 p-8 border-2 border-slate-400 rounded-lg">
      <div>
        <img src={bookData.book_url} alt="cart-image" className="w-36" />
      </div>
      <div className="pl-8 pt-2">
        <h2 className="text-2xl font-bold">{bookData.book_name}</h2>
        <p className="pt-2">{bookData.author_name}</p>
        <h3 className="text-2xl font-bold pt-3 text-[#fb995d]">
          &#8377;{bookData.price}/-
        </h3>

        <button
          onClick={handleRemove}
          className="bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in rounded-lg p-4 mt-4 cursor-pointer text-white"
        >
          Remove from Cart
        </button>
      </div>
    </section>
  );
};

export default CartItemCard;
