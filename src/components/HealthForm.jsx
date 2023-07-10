import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const HealthForm = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    blood: "",
    hasDisease: false,
    diseaseDetails: "",
    phone: "",
  });
  const [userData, setuserData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("healthData", JSON.stringify(formData));
    setFormData({
      name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      blood: "",
      hasDisease: false,
      diseaseDetails: "",
      phone: "",
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem("healthData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setuserData(parsedData);
    }
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex-grow p-4">
        <h2 className="text-xl mb-4">Health Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-gray-700">
                Phone:
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-gray-700">
                Height(cms):
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-gray-700">
                Weight(kgs):
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="blood" className="block text-gray-700">
                Blood Group:
              </label>
              <select
                id="blood"
                name="blood"
                value={formData.blood}
                onChange={handleInputChange}
                required
                className="border rounded-md border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="">Select </option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="hasDisease" className="block text-gray-700">
              <input
                type="checkbox"
                id="hasDisease"
                name="hasDisease"
                checked={formData.hasDisease}
                onChange={handleInputChange}
                className="form-checkbox mr-2 text-blue-500"
              />
              Do you have any Existing disease?
            </label>
          </div>
          {formData.hasDisease && (
            <div className="mb-4">
              <label htmlFor="diseaseDetails" className="block text-gray-700">
                Disease Details:
              </label>
              <input
                type="text"
                id="diseaseDetails"
                name="diseaseDetails"
                value={formData.diseaseDetails}
                onChange={handleInputChange}
                className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500 rounded-md"
              />
            </div>
          )}
          <button
            type="submit"
            onClick={() => setModalShow(!ModalShow)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Save
          </button>
        </form>
      </div>
      <div className="w-1/4 bg-gray-200 p-4 h-screen">
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong className="text-gray-700">Name:</strong> {userData.name}
          </li>
          <li>
            <strong className="text-gray-700">Age:</strong> {userData.age}
          </li>
          <li>
            <strong className="text-gray-700">Gender:</strong> {userData.gender}
          </li>
          <li>
            <strong className="text-gray-700">Height:</strong> {userData.height}
          </li>
          <li>
            <strong className="text-gray-700">Weight:</strong> {userData.weight}
          </li>
          <li>
            <strong className="text-gray-700">Blood Group:</strong>{" "}
            {userData.blood}
          </li>
          <li>
            <strong className="text-gray-700">Has Disease:</strong>{" "}
            {userData.hasDisease ? "Yes" : "No"}
          </li>
          {userData.hasDisease && (
            <li>
              <strong className="text-gray-700">Disease Details:</strong>{" "}
              {userData.diseaseDetails}
            </li>
          )}
        </ul>
      </div>
      {ModalShow && (
        <Modal
          show={ModalShow}
          setShow={setModalShow}
          msg={{ head: "Success", body: "User profile created successfully!" }}
        />
      )}
    </div>
  );
};

export default HealthForm;
