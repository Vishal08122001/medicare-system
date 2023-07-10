import React, { useState, useEffect } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MedicineReminder = () => {
  const [medicine, setMedicine] = useState({
    Name: "",
    Dosage: "",
    Schedule: [],
  });
  const [medList, setMedList] = useState(
    JSON.parse(localStorage.getItem("medicine")) || []
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("medicine", JSON.stringify(medList));
  }, [medList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMedicine((prev) => ({
        ...prev,
        Schedule: [...prev.Schedule, value],
      }));
    } else {
      setMedicine((prev) => ({
        ...prev,
        Schedule: prev.Schedule.filter((schedule) => schedule !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      medicine.Name.trim() === "" ||
      medicine.Dosage.trim() === "" ||
      medicine.Schedule.length === 0
    ) {
      setError(true);
      return;
    }
    setMedList((prevList) => [...prevList, medicine]);
    setMedicine({
      Name: "",
      Dosage: "",
      Schedule: [],
    });
  };

  const handleDelete = (index) => {
    const updatedList = [...medList];
    updatedList.splice(index, 1);
    setMedList(updatedList);
  };

  const handleEdit = (index) => {
    const editedMedicine = medList.find((item, id) => id === index);
    setMedicine(editedMedicine);
    setMedList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <div className="flex-grow p-4">
      <div className="max-w-sm mx-auto bg-white p-4 shadow rounded">
        <h3 className="text-lg mb-4">Add Medicine</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Medicine Name:</label>
            <input
              type="text"
              name="Name"
              className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              onChange={handleInputChange}
              value={medicine.Name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dosage:</label>
            <input
              type="text"
              name="Dosage"
              className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              value={medicine.Dosage}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Schedule:</label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Morning"
                checked={medicine.Schedule.includes("Morning")}
                onChange={handleCheckboxChange}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-1">Morning</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Evening"
                checked={medicine.Schedule.includes("Evening")}
                onChange={handleCheckboxChange}
                className="form-checkbox text-blue-500 ml-2"
              />
              <span className="ml-1">Evening</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Night"
                checked={medicine.Schedule.includes("Night")}
                onChange={handleCheckboxChange}
                className="form-checkbox text-blue-500 ml-2"
              />
              <span className="ml-1">Night</span>
            </label>
          </div>
          {error && <p className="text-red-500">Please enter all fields.</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Medicine
          </button>
        </form>
      </div>

      <div className="mt-4">
        <h3 className="text-lg mb-2">Medicine List</h3>
        {medList.length > 0 ? (
          medList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 shadow rounded mt-4"
            >
              <ul>
                <li className="mb-2">
                  <span className="font-medium">Medicine Name:</span>{" "}
                  {item.Name}
                </li>
                <li className="mb-2">
                  <span className="font-medium">Dosage:</span> {item.Dosage}
                </li>
                <li className="mb-2">
                  <span className="font-medium">Schedule:</span>{" "}
                  {item.Schedule.join(", ")}
                </li>
              </ul>
              <div>
                <button
                  className="px-2 py-2 rounded mt-2 hover:bg-red-200"
                  onClick={() => handleDelete(index)}
                >
                  <RiDeleteBin6Fill size={25} color="red" />
                </button>
                <button
                  className="px-2 py-2 rounded mt-2 hover:bg-green-200"
                  onClick={() => handleEdit(index)}
                >
                  <AiTwotoneEdit size={25} color="green" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-xl">No Medicine Added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineReminder;
