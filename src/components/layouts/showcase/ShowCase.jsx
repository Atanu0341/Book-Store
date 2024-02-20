import React from "react";
import ShowCasebg from "../../../assets/showcase-bg.jpg";
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const ShowCase = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${ShowCasebg})` }}>
      <Navbar darkTheme={false} />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Best <span className="text-[#fb995d]">Books</span> Available
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Buy quality books at cheaper price
        </p>
        <SearchInputForm darkTheme={true}/>
      </div>
    </section>
  );
};

export default ShowCase;
