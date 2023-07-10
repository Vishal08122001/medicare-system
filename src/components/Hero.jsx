import React from "react";
import HeroImg from "../Assets/HeroImg.jpg";

const Hero = () => {
  return (
    <div>
      <div
        name="home"
        className="w-full bg-gray-300 flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div
            className="flex flex-col justify-center h-full pr-5"
            style={{ alignItems: "center" }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6 mt-5">
              Welcome to the Medicare System
            </h1>
            <p className="text-gray-500 py-4 max-w-md text-lg text-center">
              A user-friendly Web App for all senior citizens to manage their
              medicines, maintain a healthy lifestyle with free yoga, and
              connect with a community to connect with others.
            </p>
          </div>

          <div className="mt-5 sm:mt-12 w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-smiley-senior-couple-sitting_23-2148984223.jpg?w=740&t=st=1688816213~exp=1688816813~hmac=4b396e59198fcd440360569b529c96c2666d186291a34ad85c1673f09c05fde7"
              alt="Senior Couple"
              className="rounded-2xl w-full h-auto mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
