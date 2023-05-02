import React from "react";
import { useContext, useState } from "react";
import { userContext } from "../context";
import { ethers } from "ethers";
import image1 from "../assets/ethers.jpeg";

export const Transfer = () => {
  const { contract } = useContext(userContext);
  const [formData, setFormData] = useState({
    account: "",
    amount: "",
  });
  const [accountaddress, setaccountaddress] = useState(
    "0x1234567890abcdef1234567890abcdef12345678"
  );
  const [accountbalance, setaccountbalance] = useState(0);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { account, amount } = formData;
    setaccountaddress(account);
    setaccountbalance(amount);
    try {
      if (window.ethereum) {
        const tx = await contract.transferether(account, {
          value: ethers.utils.parseEther(amount),
        });
        await tx.wait();
        alert("Transaction Successful");
        setFormData({ account: "", amount: "" });
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
    e.target.reset();

    // Do something with the account and amount data
  };

  return (
    <div className="bg-gray-900 animate-gradient shadow overflow-hidden ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 ">
        <img
          src={image1}
          alt="logo"
          className="w-full h-48 object-center object-cover my-7"
        />
        <div>
          <label
            htmlFor="account"
            className="block text-gray-100 font-bold mb-2"
          >
            Metamask Account Address
          </label>
          <input
            type="text"
            name="account"
            value={formData.account}
            onChange={(e) =>
              setFormData({ ...formData, account: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={accountaddress}
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
            placeholder={accountbalance}
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
