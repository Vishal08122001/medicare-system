import React from "react";
import MedicineReminder from "../components/MedicineReminder";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MedicineReminderPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="hidden sm:block bg-gray-100 h-screen">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <MedicineReminder />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicineReminderPage;
