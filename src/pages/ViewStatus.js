import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { userContext } from "../context";
import { ethers } from "ethers";

export const ViewStatus = () => {
  const { contract } = useContext(userContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [student, setStudent] = useState("");
  const [myname, setmyname] = useState("");
  const [placename, setplacename] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await contract.showdetails(name);
    console.log(data);
    setplacename(name);
    setName("");
    setAge(data.age.toString());
    setmyname(data.myname);
    setAddress(data.accountaddress);
    setStudent(data.student.toString());
    setAmount(ethers.utils.formatEther(data.accountbalance.toString()));
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-gray-900 -lg p-6  border-gray-300 shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 mx-auto mt-1 p-3 rounded-lg shadow-lg bg-gray-900"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-100 font-bold mb-2">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={placename}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-bold  mt-6 mb-4">User Information</h2>
      <p className="text-gray-200 font-bold mb-2">Name: </p>
      <p className="text-gray-200 mb-6">{myname}</p>
      <p className="text-gray-200 font-bold mb-2">Age:</p>
      <p className="text-gray-200 mb-6">{age}</p>
      <p className="text-gray-200 font-bold mb-2">Account Address:</p>
      <p className="text-gray-200 mb-6">{address}</p>
      <p className="text-gray-200 font-bold mb-2">Account Amount:</p>
      <p className="text-gray-200 mb-0">{amount}</p>
      <p className="text-gray-200 font-bold mb-2">Is Student:</p>
      <p className="text-gray-200 mb-6">{student}</p>
    </div>
  );
};
