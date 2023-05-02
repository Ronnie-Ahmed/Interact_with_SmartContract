import React from "react";
import { useContext } from "react";
import { userContext } from "../context";

export const Demo = () => {
  const { provider, signer, account } = useContext(userContext);
  console.log(provider, signer, account);
  return (
    <div>
      <h1>Nice</h1>
    </div>
  );
};
