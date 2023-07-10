import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = weight / ((height / 100) * (height / 100));
      setBMI(bmiValue.toFixed(2));
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
  };

  const getBMIClassification = () => {
    if (!bmi) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";

    return "";
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 shadow-lg mt-5 mb-5 min-h-screen rounded w-full">
      <h2 className="text-xl mb-4">BMI Calculator</h2>

      <div className="mb-4">
        <label htmlFor="height" className="block text-gray-700">
          Height (cm):
        </label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="weight" className="block text-gray-700">
          Weight (kg):
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border border-gray-400 px-2 py-1 w-full focus:outline-none focus:border-blue-500 rounded-md"
        />
      </div>
      <div className="mb-4">
        <button
          type="button"
          onClick={calculateBMI}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate BMI
        </button>
        <button
          type="button"
          onClick={resetCalculator}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
        >
          Reset
        </button>
      </div>
      {bmi && (
        <div className="mb-4">
          <strong>Your BMI:</strong> {bmi} ({getBMIClassification()})
        </div>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2">BMI Range</th>
            <th className="py-2">Classification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="py-2">Less than 18.5</td>
            <td className="py-2">Underweight</td>
          </tr>
          <tr>
            <td className="py-2">18.5 - 24.9</td>
            <td className="py-2">Normal weight</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-2">25 - 29.9</td>
            <td className="py-2">Overweight</td>
          </tr>
          <tr>
            <td className="py-2">30 or more</td>
            <td className="py-2">Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BMICalculator;
