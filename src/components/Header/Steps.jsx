import React from "react";
import Step from "./Step";

const Steps = () => {
  return (
    <div className="steps mb-4 d-flex justify-content-around">
      <Step id={1} nameStep="Basic" />
      <Step id={2} nameStep="Contacts" />
      <Step id={3} nameStep="Avatar" />
      <Step id={4} nameStep="Finish" />
    </div>
  );
};

export default Steps;
