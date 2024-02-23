import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const redirectToSearch = () => {
    if (searchField === "") {
      alert("Search Field is empty");
    } else {
      navigate("/search", { state: searchField });
    }
  };

  return (
    <div
      className={`flex pl-2 bg-white mt-5 rounded-lg ${
        darkTheme ? "shadow-black shadow-sm" : "shadow-slate-400 shadow-sm"
      }`}
    >
      <input
        type="text"
        value={searchField}
        onChange={handleChange}
        className="flex-1 outline-none text-black text-base"
        placeholder="Search Books....."
      />
      <button
        onClick={redirectToSearch}
        className={`text-white bg-[#fb995d] py-1 px-2 rounded-r-md transition duration-150 ease-in hover:bg-[#fa7727] ${
          darkTheme ? "shadow-black shadow-sm" : "shadow-slate-400 shadow-sm"
        }`}
      >
        🔍 Search
      </button>
    </div>
  );
};

export default SearchInputForm;
