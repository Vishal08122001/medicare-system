import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const CommunityData = () => {
  const [userdata, setUserData] = useState([]);
  const [ShowModel, setShowModel] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-4xl min-h-screen mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Community</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {userdata.map((item, index) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow rounded w-full  mb-4"
          >
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="mb-2">
                <strong>Website:</strong> {item.website}
              </p>
              <p>
                <strong>Address:</strong>
                {`${item.address.street}, ${item.address.suite}, ${item.address.city} ${item.address.zipcode}`}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModel(true)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
      {ShowModel && (
        <Modal
          setShow={setShowModel}
          show={ShowModel}
          msg={{
            head: "Congratulations",
            body: "Friend request sent successfully! We will notify you once its accepted.",
          }}
        />
      )}
    </div>
  );
};

export default CommunityData;
