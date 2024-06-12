import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";

const User = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [commission, setCommission] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3000/users"); // Update the URL
      if (response.data.status === true) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/users", {
      userName,
      password,
      commission,
    });
    if (res.data.status === true) {
      fetchData();
      setUserName("");
      setPassword("");
      setCommission("");
    }
  };

  
  const toggleUserStatus = async (userId, newStatus) => {
    alert("updated", userId);
    try {
      // Update status in the backend
      await axios.post("/updateStatus", { userId, status: newStatus });

      // Update status in the frontend
      setData((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const dummyData = [
    {
      _id: 1,
      userName: "john@gmail.com",
      password: "123456",
      commission: "0.00",
      percentage: "5",
      status: true,
      wallet: 0,
    },
  ];

  return (
    <div className="container mx-auto mt-8 ">
      <div>
        <div className="p-4 border rounded">
          <h1 className="text-2xl font-semibold">Add User</h1>
          <form onSubmit={handleSubmit} className="">
            <div className="grid grid-cols-2 gap-8">
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Commission</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={commission}
                  onChange={(e) => setCommission(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <h1 className="mt-8 text-2xl font-semibold">User List</h1>
        <table className="w-full border border-collapse border-gray-200 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sr. No</th>
              <th className="px-4 py-2 border">User Name</th>
              {/* <th className="px-4 py-2 border">Password</th> */}
              <th className="px-4 py-2 border">Commission</th>
              <th className="px-4 py-2 border">Percentage</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Wallet</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.length > 0 ? (
              dummyData.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{user.userName}</td>
                  {/* <td className="px-4 py-2 border">{user.password}</td> */}
                  <td className="px-4 py-2 border">{user.commission}</td>
                  <td className="px-4 py-2 border">{user.percentage}</td>
                  <td className="px-4 py-2 border">
                    <Switch
                      onChange={() => toggleUserStatus(user._id, !user.status)}
                      checked={user.status}
                      offColor="#f56565"
                      onColor="#3B82F6"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={20} // Adjust the height
                      width={40} // Adjust the width
                      boxShadow="10" // Adjust the border radius
                    />
                  </td>
                  <td className="px-4 py-2 border">{user.wallet}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-2 text-center border">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
