import React from "react";
import "../style/buttons.css";
import "../style/sec1.css";
export default function Button({ value, changeScreenVal }) {
  return (
    <button className="btn" onClick={() => changeScreenVal(value)}>
      {value}
    </button>
  );
}
