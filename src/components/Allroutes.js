import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Transfer } from "../pages/Transfer";
import { ChangeStatus } from "../pages/ChangeStatus";
import { AllPeople } from "../pages/AllPeople";
import { ViewStatus } from "../pages/ViewStatus";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/ChangeStatus" element={<ChangeStatus />} />
        <Route path="/Allpeople" element={<AllPeople />} />
        <Route path="/ViewStatus" element={<ViewStatus />} />
      </Routes>
    </div>
  );
};
