import React, { useState } from "react";

export const NumberBuilder = () => {
  let [counter, setCounter] = useState(0);
  let [numbers, setNumbers] = useState("");

  const handleAddNum = () => {
    setCounter(++counter);
    setNumbers(numbers + " " + counter);
  };

  const handleReset = () => {
    setNumbers("");
    setCounter(0);
  };

  return (
    <>
      <button onClick={() => handleAddNum()}>Add Number</button>
      <button onClick={() => handleReset()}>Reset</button>
      <br></br>
      Numbers: {numbers}
    </>
  );
};
