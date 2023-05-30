import React, { useState } from "react";

export const AddCalculator = () => {
  let [total, setTotal] = useState(0);

  const handleAddNum = (numToAdd) => {
    setTotal((total += numToAdd));
  };

  return (
    <>
      <button onClick={() => handleAddNum(1)}>Add 1</button>
      <button onClick={() => handleAddNum(2)}>Add 2</button>
      <button onClick={() => handleAddNum(3)}>Add 3</button>
      <br></br>
      Total: {total}
    </>
  );
};
