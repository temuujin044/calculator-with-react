import React from "react";
import "../style/screen.css";

export default function Screen(props) {
  return <div className="screen">{props.value}</div>;
}
