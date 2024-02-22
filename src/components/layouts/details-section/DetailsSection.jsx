import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookData } from "../../../util/BookData";
import { CartContext, UserContext } from "../../../App";

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  const user = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));

    setBookData(newData[0]);
  }, []);

  const handleAddToCart = () => {
    if (user) {
      // Add to cart
      // Ensure cartItems is initially an array before spreading
      const updatedCartItems = Array.isArray(cartItems) ? [...cartItems, bookData] : [bookData];
      
      // Update cartItems
      setCartItems(updatedCartItems);
      alert(`${bookData.book_name} added to your cart!`);
    } else {
      navigate("/login");
      alert("Please Login or Sign up first");
    }
  };

  return (
    <section className="py-20">
      <div className="w-11/12 m-auto">
        <div className="flex flex-col justify-start md:flex-row items-center gap-8 lg:items-start">
          <div className="w-2/4 md:w-full lg:w-4/5 xl:w-2/5 flex justify-center">
            <img
              src={bookData.book_url}
              alt="book"
              className="h-4/5 md: xl:h-2/4 border bottom-1 border-slate-400"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{bookData.book_name}</h2>
            <p className="text-[#fb995d] font-semibold text-xl">
              {bookData.author_name}
            </p>
            <p className="text-base">{bookData.book_description}</p>
            <p>
              <strong>Language:</strong> {bookData.language}
            </p>
            <p>
              <strong>Book Length:</strong> {bookData.print_length}
            </p>
            <h3 className="text-xl font-bold text-[#ff904c] pt-4">
              &#8377;{bookData.price}
            </h3>

            <a
              onClick={handleAddToCart}
              className="inline-block cursor-pointer py-4 px-8 w-2/5 sm:w-2/4 md:w-2/5 lg:w-[30%] xl:w-1/5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition duration-150 ease-in"
            >
              🛒 Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
