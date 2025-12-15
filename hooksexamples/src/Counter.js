import React, { useState } from "react";
import "./App.css";

function Hook_ControlledButtonState() {
  const [count, setCount] = useState(0);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>

      <h1>Click Counts are {count}</h1>
      <button onClick={ClickHandle}>Click me {count}</button>
    </div>
  );
}

export default Hook_ControlledButtonState;
