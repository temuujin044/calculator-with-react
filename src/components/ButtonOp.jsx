import React from "react";
import "../style/buttons.css";
import "../style/sec1.css";
export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <button className="btn" onClick={() => changeTodoOp(value)}>
      {value}
    </button>
  );
}
