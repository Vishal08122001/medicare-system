import React from "react";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center">
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
