import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import DetailSection from "../../components/layouts/details-section/DetailsSection";

const BookDetails = () => {
  return (
    <section>
      <Navbar darkTheme={true} />

      <DetailSection />
    </section>
  );
};

export default BookDetails;
