import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Feedback = () => {
  return (
    <>
      <Navbar />
      <div className="flex  min-h-screen">
        <div name="contact" className="w-full  h-fit  p-4 text-white">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8 pt-5">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-black">
                Feedback
              </p>
              <p className="text-gray-400 py-6 max-w-xxl">
                Submit the form below with the suggestions and to get in touch
                with us
              </p>
            </div>
            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/3b506296-d1e9-4a2e-ae73-06dd87fa0fb2"
                method="POST"
                className="flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  style={{ resize: "none" }}
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
