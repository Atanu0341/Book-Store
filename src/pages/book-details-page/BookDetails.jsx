import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import DetailSection from "../../components/layouts/details-section/DetailsSection";
import Footer from "../../components/layouts/footer/Footer";

const BookDetails = () => {
  return (
    <section>
      <Navbar darkTheme={true} />

      <DetailSection />
      <Footer />
    </section>
  );
};

export default BookDetails;
