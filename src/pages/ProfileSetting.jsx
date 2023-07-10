import React from "react";
import HealthForm from "../components/HealthForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ProfileSetting = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="hidden sm:block bg-gray-100 h-screen">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <HealthForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSetting;
