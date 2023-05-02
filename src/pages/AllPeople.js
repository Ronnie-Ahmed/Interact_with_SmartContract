import React from "react";
import { ethers } from "ethers";
import { useState, useContext } from "react";
import { userContext } from "../context";
import image2 from "../assets/test.jpg";

export const AllPeople = () => {
  const { contract } = useContext(userContext);
  console.log(contract);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    amount: "",
  });
  const [personname, setpersonname] = useState("Your Name");
  const [personage, setpersonage] = useState(0);
  const [personamount, setpersonamount] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, amount } = formData;
    setpersonname(name);
    setpersonage(age);
    setpersonamount(amount);
    try {
      if (window.ethereum) {
        const tx = await contract.addpeople(name, age, amount);
        await tx.wait();
        setFormData({ name: "", age: "", amount: "" });
        alert("Form Submitted Successfully");
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-900 animate-gradient shadow overflow-hidden ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 ">
        <img
          src={image2}
          alt="logo"
          className="w-full h-48 object-center object-cover my-7"
        />
        <div>
          <label
            htmlFor="account"
            className="block text-gray-100 font-bold mb-2"
          >
            Give Us Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={personname}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-gray-100 font-bold mb-2"
          >
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={personage}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-gray-100 font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={personamount}
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-indigo-500 focus:outline-none focus:shadow-outline mb-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
