import { useState } from "react";
import { Screen } from "./Screen";
import { ButtonsPanel } from "./ButtonsPanel";
import { evaluate } from "../helpers/evaluate";
import buttons from "../data/buttons.json";

export const Calculator = () => {
  const [calcState, setCalcState] = useState({
    firstValue: "",
    operator: "",
    secondValue: "",
    screenValue: "0",
    isNum: false,
  });

  const isOperator = (str) => {
    return str === " + " || str === " - " || str === " x " || str === " ÷ ";
  };

  const handleButtonClick = ({ name, isNum }) => {
    setCalcState((prevState) => {
      switch (true) {
        case isOperator(name) && prevState.secondValue:
          const sum = evaluate(
            prevState.firstValue,
            prevState.operator,
            prevState.secondValue
          );
          return {
            ...prevState,
            firstValue: sum,
            secondValue: "",
            operator: name === "=" ? "" : name,
          };
        case isOperator(name):
          return {
            ...prevState,
            operator: name,
          };
        case name === "AC":
          return { firstValue: "", screenValue: "0", isNum };
        case isNum && prevState.operator:
          return {
            ...prevState,
            secondValue: name,
            screenValue: name,
            isNum,
          };
        case isNum:
          return {
            firstValue: prevState.firstValue + name,
            screenValue: prevState.firstValue + name,
            isNum,
          };

        default:
          return {
            firstValue: prevState.firstValue + name,
            screenValue: prevState.screenValue,
            isNum,
          };
      }
    });
  };

  return (
    <>
      <Screen screenValue={calcState.screenValue} />
      <ButtonsPanel
        rows={buttons.values}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};
