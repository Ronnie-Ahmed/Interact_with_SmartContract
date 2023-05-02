import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useState, useContext } from "react";
import { userContext } from "../context";
import { abi } from "../constans";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const accountaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [state, setState] = useState("Connect Wallet");
  const [balance, setbalance] = useState(0);
  const accountabi = abi;
  const {
    provider,
    setProvider,
    signer,
    setSigner,
    contract,
    setContract,
    account,
    setaccount,
  } = useContext(userContext);
  const handleclick = async () => {
    if (window.ethereum) {
      const newprovider = new ethers.providers.Web3Provider(window.ethereum);
      await newprovider.send("eth_requestAccounts", []);
      setProvider(newprovider);
      const newsigner = newprovider.getSigner();
      setSigner(newsigner);
      const newcontract = new ethers.Contract(
        accountaddress,
        accountabi,
        newsigner
      );
      setContract(newcontract);
      console.log(contract);
      const account = await newsigner.getAddress();
      const balances = await newsigner.getBalance();
      setaccount(account);
      console.log(account);
      setState("Connected");
      const bal = ethers.utils.formatEther(balances.toString());
      setbalance(bal);
    } else {
      alert("Please install metamask");
    }
  };
  useEffect(() => {
    handleclick();
  }, []);

  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl">
          Hello, Geeks
        </h1>
        <div className="mt-8 flex justify-center  ">
          <button
            onClick={handleclick}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/50"
          >
            {state}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm1-8a1 1 0 110-2 1 1 0 110 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8  ">
        <div className="bg-white overflow-hidden sm:rounded-lg shadow-lg shadow-blue-500/50">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-gradient shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="fire-animation">
                <h3 className="text-2xl leading-6 font-medium text-slate-50">
                  Account Information
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p className="mb-2 text-xl text-slate-50 hover:text-lime-200 transition-colors duration-500">
                    Account Address:{" "}
                    <span className="font-semibold">{account}</span>
                  </p>
                  <p className="mb-2 text-xl text-slate-50 hover:text-lime-200 transition-colors duration-500">
                    Balance:{" "}
                    <span className="font-semibold">{balance} ETH</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
