import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 p-4">
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-cyan-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/medicinereminder"
            className="text-cyan-500 hover:text-blue-700"
          >
            Medicine Reminder
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/setting" className="text-cyan-500 hover:text-blue-700">
            Account Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
