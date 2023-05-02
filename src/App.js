import "./App.css";
import { ethers } from "ethers";
import { abi } from "./constans";
// import image1 from "./assets/image.jpg";

import { Allroutes } from "./components/Allroutes";
import { userContext } from "./context";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setaccount] = useState(null);
  return (
    <userContext.Provider
      value={{
        provider,
        setProvider,
        signer,
        setSigner,
        contract,
        setContract,
        account,
        setaccount,
      }}
    >
      <div className="App">
        <Navbar />
        <Allroutes />
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
