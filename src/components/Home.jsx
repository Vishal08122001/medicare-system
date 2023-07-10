import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen" style={{ width: "100vw" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            A user-friendly system designed for senior citizens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Link to="/medicinereminder">
              <div
                className="bg-blue-100  rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Manage Medicines
                </h2>

                <p className="text-gray-700 ">
                  Easily keep track of your medicines with our medicine reminder
                  feature. Set reminders for dosage, schedule, and never miss a
                  dose.
                </p>
              </div>
            </Link>
            <Link to="/setting">
              <div
                className="bg-blue-100  rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>

                <p className="text-gray-700">
                  Customize your profile settings to suit your preferences.
                  Update personal information and many more.
                </p>
              </div>
            </Link>
            <Link to="/yogaplace">
              <div
                className="bg-blue-100  rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">Yoga Place</h2>

                <p className="text-gray-700">
                  Get a free subscription of Yoga and Exercises for you and your
                  family.
                </p>
              </div>
            </Link>

            <Link to="/bmi">
              <div
                className="bg-blue-100  rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">BMI Calculator </h2>

                <p className="text-gray-700">
                  Calculate your BMI for better understanding of your health.
                </p>
              </div>
            </Link>
            <Link to="/feedback">
              <div
                className="bg-blue-100 rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">Give feedback</h2>

                <p className="text-gray-700">
                  If you have any kind of suggestions and feedback for us kindly
                  click on this.
                </p>
              </div>
            </Link>
            <Link to="/community">
              <div
                className="bg-blue-100 rounded-lg shadow-md p-8 cursor-pointer"
                style={{ height: "14rem" }}
              >
                <h2 className="text-2xl font-semibold mb-4">Community</h2>

                <p className="text-gray-700">
                  A place where you can connect with other members.
                </p>
              </div>
            </Link>
          </div>

          <p className="px-5 flex justify-center font-bold mt-12 py-4 text-2xl text-gray-700 uppercase tracking-wide text-center ">
            Here's what a few of our customers have to say about us
          </p>

          <div className="container mx-auto px-5 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="col-md-4 mt-2">
                <div className="shadow p-4 bg-white rounded-lg">
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <h1
                        alt="Profile"
                        className="me-2 shadow w-16 h-16 rounded-full bg-orange-200 text-black text-xl flex justify-center items-center"
                      >
                        S
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">Sakshi Dhawan</h1>
                      <p>Rating: 4.5/5</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Fabulous experience and amazing hospitality. Thankyou
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="shadow p-4 bg-white rounded-lg">
                  <div className="flex">
                    <h1
                      alt="Profile"
                      className="me-2 shadow w-16 h-16 rounded-full bg-orange-200 text-black text-xl flex justify-center items-center"
                    >
                      V
                    </h1>
                    <div>
                      <h1 className="font-bold text-xl">Vishal Chauhan</h1>
                      <p>Rating: 4.0/5</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500">
                    Game-changer! Reliable and user-friendly. Must-have
                    application!
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="shadow p-4 bg-white rounded-lg">
                  <div className="flex">
                    <h1
                      alt="Profile"
                      className="me-2 shadow w-16 h-16 rounded-full bg-orange-200 text-black text-xl flex justify-center items-center"
                    >
                      J
                    </h1>
                    <div>
                      <h1 className="font-bold text-xl">John Doe</h1>
                      <p>Rating: 4.5/5</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500">
                    "Life-saving app! Never forget your meds again. Highly
                    recommended!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
