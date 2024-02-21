import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ darkTheme, darkText }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={`absolute top-0 w-full z-[1] py-4 ${darkTheme ? 'bg-[#333] relative' : 'bg-transparent'}`}>
      <div className="w-11/12 m-auto flex justify-between items-center relative">
        <a href="#" className="text-2xl font-bold text-white">
          Book<span className="text-[#fb995d]">World</span>
        </a>

        {/* Toggle button with icon for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Horizontal menu for small screens */}
        <nav className={`lg:hidden absolute top-16 right-0 ${menuOpen ? 'block' : 'hidden'} bg-slate-800 rounded-lg w-3/12 p-4`}>
          <Link to="/" className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/books" className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>
            Books
          </Link>
          <Link to="/login" className={`block mb-3 text-xl transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>Login</Link>
          <Link to="/signup" className={`block text-xl transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>Sign up</Link>
        </nav>

        {/* Regular vertical menu for larger screens */}
        <nav className="hidden lg:flex mt-4 lg:mt-0">
          <Link to="/" className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>
            Home
          </Link>
          <Link to="/books" className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>
            Books
          </Link>
          <Link to="/login" className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>Login</Link>
          <Link to="/signup" className={`text-xl pl-5 transition duration-150 ease-in hover:text-[#fb995d] ${darkText ? 'text-black' : 'text-white'}`}>Sign up</Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
