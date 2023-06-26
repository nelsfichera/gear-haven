import React from "react";
import Hero from "../components/Hero";
import How from "../components/How";
import Rent from "../components/Rent";
import About from "../components/About";
import Review from "../components/Review";
import ScrollToTop from "../components/ScrollToTop";

const Homepage = () => {
  return (
    <section className="layout-lg">
      <ScrollToTop />
      <Hero />
      <How />
      <Rent />
      <About />
      <Review />

      {/* <Help /> */}
    </section>
  );
};

export default Homepage;