import React from "react";

const SearchInputForm = ({ darkTheme }) => {
  return (
    <div className={`flex pl-2 bg-white mt-5 rounded-lg ${darkTheme ? 'shadow-black shadow-sm' : 'shadow-slate-400 shadow-sm'}`}>
      <input
        type="text"
        className="flex-1 outline-none text-black text-base"
        placeholder="Search Books....."
      />
      <button className={`text-white bg-[#fb995d] py-1 px-2 rounded-r-md transition duration-150 ease-in hover:bg-[#fa7727] ${darkTheme ? 'shadow-black shadow-sm' : 'shadow-slate-400 shadow-sm'}`}>
        🔍 Search
      </button>
    </div>
  );
};

export default SearchInputForm;
