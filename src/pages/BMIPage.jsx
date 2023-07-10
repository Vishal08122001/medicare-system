import React from "react";
import Navbar from "../components/Navbar";
import BMICalculator from "../components/BMICalculator";
import Footer from "../components/Footer";

const BMIPage = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />

      <BMICalculator />

      <Footer />
    </div>
  );
};

export default BMIPage;
