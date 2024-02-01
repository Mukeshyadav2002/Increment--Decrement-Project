import React, { useState } from "react";
import "./App.css";

const IncDecrement = () => {
const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount (count-1)
  }
  return (
    <div className="formContainer">
      <h3>Increment & Decrement Project</h3>
      <div className="btn">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>

      <h1>{count}</h1>
    </div>
  );
};

export default IncDecrement;
