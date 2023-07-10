import React from "react";
import { useParams } from "react-router-dom";
import { yogaAsanas } from "../Data/YogaAsana";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const YogaAsanaPage = () => {
  const { asanaName } = useParams();

  // Find the specific asana using the asanaName parameter
  const asana = yogaAsanas.find(
    (asana) => asana.name === decodeURIComponent(asanaName)
  );

  // Generate the Google search URL based on the asana name
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `${asana.name} yoga`
  )}`;

  // Render the asana details and the link to the Google search page
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl text-blue-500 underline font-bold mb-4">
          {asana.name}
        </h2>
        <div className="bg-white p-4 shadow rounded">
          <img
            src={asana.image}
            alt={asana.name}
            className="w-full h-100 object-cover mb-4"
          />
          <ul className="list-disc pl-6">
            {asana.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <h2 className="text-2xl mt-5 font-bold mb-4">Details:</h2>
          <p className=" text-md text-slate-950">{asana.detail}</p>
        </div>
        <div className="flex justify-center">
          <a
            href={googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl underline mt-4 bg-gradient-to-r from-orange-300 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Explore on Google
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default YogaAsanaPage;
