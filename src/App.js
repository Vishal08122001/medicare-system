import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MedicineReminderPage from "./pages/MedicineReminderPage";
import ProfileSetting from "./pages/ProfileSetting";
import BMIPage from "./pages/BMIPage";
import YogaPage from "./pages/YogaPage";
import Feedback from "./pages/Feedback";
import Community from "./pages/Community";
import YogaDetail from "./pages/YogaDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/medicinereminder",
    element: <MedicineReminderPage />,
  },
  {
    path: "/setting",
    element: <ProfileSetting />,
  },
  {
    path: "/bmi",
    element: <BMIPage />,
  },
  {
    path: "/yogaplace",
    element: <YogaPage />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/yogaplace/:asanaName",
    element: <YogaDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
