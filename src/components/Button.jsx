import React from "react";
import "../style/button.css";

export default function Button({ setScreenVal }) {
  function changVal(value) {
    setScreenVal(value);
  }
  return <button className="btn"></button>;
}
