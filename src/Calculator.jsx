import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./style/global.css";
import "./style/mainCalc.css";
import { numberButtons, operatorButtons, operButtons } from "./utils/Buttons";

export default function Calculator() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState(" ");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }

  function equalHandler() {
    if (todoOp == "+") {
      console.log(todoOp);
      const result = Number(prevScreen) + Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "-") {
      const result = Number(prevScreen) - Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "*") {
      const result = Number(prevScreen) * Number(currentScreen) + "";
      setCurrentScreen(result);
    }
    if (todoOp == "/") {
      const result = Number(prevScreen) / Number(currentScreen) + "";
      setCurrentScreen(result);
    }
  }

  function changeScreenVal(val) {
    console.log(val);
    setCurrentScreen(currentScreen + val);
  }

  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="sec1">
          <div className="operBut">
            {operButtons.map((val, index) => {
              return (
                <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
              );
            })}
          </div>
          <div className="numbers">
            {numberButtons.map((val, index) => {
              return (
                <Button
                  key={index}
                  value={val}
                  changeScreenVal={changeScreenVal}
                />
              );
            })}
          </div>
        </div>
        <div className="sec2">
          <div className="operators">
            {operatorButtons.map((val, index) => {
              return (
                <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
              );
            })}
          </div>
          <div>
            <button className="btn" onClick={equalHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
