import React from "react";
import { SuccessPage } from "./SuccessPage";

const Success = () => {
  const handleReset = () => {
    // Add any reset logic here if needed
    // For example, clearing cart state, redirecting, etc.
    console.log("Reset function called");
  };

  return (
    <>
      <SuccessPage onReset={handleReset} />
    </>
  );
};

export default Success;
