import React from "react";
import { yogaAsanas } from "../Data/YogaAsana";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const YogaPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl min-h-screen mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Yoga Asanas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {yogaAsanas.map((asana, index) => (
            <Link to={`/yogaplace/${encodeURIComponent(asana.name)}`}>
              <div
                key={index}
                className="bg-white p-4 shadow rounded"
                style={{ height: "28rem" }}
              >
                <img
                  src={`${asana.image}`}
                  alt={asana.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2 hover:underline">
                  {asana.name}
                </h3>

                <ul className="list-disc pl-6">
                  {asana.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default YogaPage;
