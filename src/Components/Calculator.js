import { useState } from "react";
import { Screen } from "./Screen";
import { ButtonsPanel } from "./ButtonsPanel";
import { evaluate } from "../helpers/evaluate";
import buttons from "../data/buttons.json";

const isOperator = (str) => {
  return (
    str === " + " ||
    str === " - " ||
    str === " x " ||
    str === " ÷ " ||
    str === "="
  );
};

const shouldEvaluate = (name, prevState) => {
  return isOperator(name) && !!prevState.secondValue;
};

const shouldClear = (name) => {
  return name === "AC";
};

const shouldUpdateSecondValue = (isNum, prevState) => {
  return isNum && !!prevState.operator;
};

const initialState = {
  firstValue: "",
  operator: "",
  secondValue: "",
  screenValue: "0",
  isNum: false,
};

export const Calculator = () => {
  const [calcState, setCalcState] = useState(initialState);

  const handleButtonClick = ({ name, isNum }) => {
    setCalcState((prevState) => {
      switch (true) {
        case shouldEvaluate(name, prevState):
          const sum = evaluate(
            prevState.firstValue,
            prevState.operator,
            prevState.secondValue
          );
          return {
            ...prevState,
            firstValue: sum,
            screenValue: sum,
            secondValue: "",
            isNum: false,
            operator: name === "=" ? "" : name,
          };
        case isOperator(name):
          return {
            ...prevState,
            isNum,
            operator: name,
          };
        case shouldClear(name):
          return initialState;
        case shouldUpdateSecondValue(isNum, prevState):
          const newName = prevState.secondValue
            ? prevState.secondValue + name
            : name;
          return {
            ...prevState,
            secondValue: newName,
            screenValue: newName,
            isNum,
          };
        case isNum:
          console.log("isNum", prevState.operator);
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
