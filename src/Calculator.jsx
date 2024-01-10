import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import "./style/global.css";
import { numberButtons, operatorButtons } from "./utils/Buttons";

export default function Calculator() {
  const [ScreenVal, setScreenVal] = useState("1");
  return (
    <div className="mainCalc">
      <Screen value={ScreenVal} />
      <div className="buttons">
        <div className="numbers">
          {numberButtons.map((val, index) => {
            return (
              <Button key={index} value={val} setScreenVal={setScreenVal} />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <Button key={index} value={val} setScreenVal={setScreenVal} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
