import React from "react";
import { useState } from "react";

const Counter = () => {
  const [currentCount, setCurentCount] = useState(0);

  const incrementCount = () => {
    setCurentCount(currentCount + 1);
  };

  const decrementCount = () => {
    if (currentCount > 0) {
      setCurentCount(currentCount - 1);
    } else {
      alert("The count is below zero!");
    }
  };

  return (
    <div className="cont">
      <div>
        <h1 className="main">Current Count: {currentCount}</h1>
        <button className="increment" onClick={incrementCount}>
          {" "}
          Increment{" "}
        </button>
        <button className="decrement" onClick={decrementCount}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
