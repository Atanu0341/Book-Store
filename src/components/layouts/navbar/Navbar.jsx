import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import Cart from "../../../assets/cart.svg";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/Firebase";

const Navbar = ({ darkTheme, darkText }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useContext(UserContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showLoginandSignUp = (
    <>
      {/* Toggle button with icon for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`text-white`}>
          {menuOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              className={`text-${darkText ? "black" : "white"}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className={`text-${darkText ? "black" : "white"}`}
            />
          )}
        </button>
      </div>

      {/* Horizontal menu for small screens */}
      <nav
        className={`lg:hidden absolute top-16 right-0 ${
          menuOpen ? "block" : "hidden"
        } bg-slate-700 rounded-lg w-3/12 p-4`}
      >
        <Link
          to="/"
          className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/books"
          className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Books
        </Link>
        <Link
          to="/login"
          className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`block text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Sign up
        </Link>
      </nav>

      {/* Regular vertical menu for larger screens */}
      <nav className="hidden lg:flex mt-4 lg:mt-0">
        <Link
          to="/"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/books"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Books
        </Link>
        <Link
          to="/login"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Sign up
        </Link>
      </nav>
    </>
  );

  const showLogoutAndCart = (
    <>
      {/* Toggle button with icon for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`text-white`}>
          {menuOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              className={`text-${darkText ? "black" : "white"}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className={`text-${darkText ? "black" : "white"}`}
            />
          )}
        </button>
      </div>

      {/* Horizontal menu for small screens */}
      <nav
        className={`lg:hidden absolute top-16 right-0 ${
          menuOpen ? "block" : "hidden"
        } bg-slate-700 rounded-lg w-3/12 p-4`}
      >
        <Link
          to="/"
          className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/books"
          className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Books
        </Link>
        <a onClick={handleLogout}
          className={`block mb-3 cursor-pointer text-xl transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-red-100" : "text-white"
          }`}
        >
          Logout
        </a>
        <Link to="/cart">
          <img src={Cart} alt="Cart" />
        </Link>
      </nav>

      {/* Regular vertical menu for larger screens */}
      <nav className="hidden lg:flex lg:justify-center lg:items-center mt-4 lg:mt-0">
        <Link
          to="/"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/books"
          className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Books
        </Link>
        <a
          onClick={handleLogout}
          className={`text-xl pl-5 cursor-pointer transition duration-150 ease-in hover:text-[#fb995d] ${
            darkText ? "text-black" : "text-white"
          }`}
        >
          Logout
        </a>
        <Link to="/cart" className="pl-4 cursor-pointer">
          <img src={Cart} alt="Cart" />
        </Link>
      </nav>
    </>
  );

  return (
    <section
      className={`absolute top-0 w-full z-[1] py-4 ${
        darkTheme ? "bg-[#333] relative" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 m-auto flex justify-between items-center relative">
        <a href="#" className="text-2xl font-bold text-white">
          Book
          <span className={`text-[${darkText ? "black" : "white"}]`}>
            World
          </span>
        </a>

        {user ? showLogoutAndCart : showLoginandSignUp}
      </div>
    </section>
  );
};

export default Navbar;
