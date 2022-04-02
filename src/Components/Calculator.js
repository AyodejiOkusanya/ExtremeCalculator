import { useState } from "react";
import { Screen } from "./Screen";
import { ButtonsPanel } from "./ButtonsPanel";
import { evaluate } from "../helpers/evaluate";
import buttons from "../data/buttons.json";

export const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: "",
    screenValue: "0",
    isNum: false,
  });

  const handleButtonClick = ({ name, isNum }) => {
    if (name === "=") {
      setCalcState((prevState) => {
        const show = evaluate(prevState.total);
        return {
          total: show,
          screenValue: show,
          isNum,
        };
      });
    } else {
      setCalcState((prevState) => {
        if (name === "AC") {
          return { total: "", screenValue: "0", isNum };
        }
        if (isNum) {
          return {
            total: prevState.total + name,
            screenValue: prevState.isNum ? prevState.total + name : name,
            isNum,
          };
        }
        console.log("pre", prevState.screenValue);
        return {
          total: prevState.total + name,
          screenValue: prevState.screenValue,
          isNum,
        };
      });
    }
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
