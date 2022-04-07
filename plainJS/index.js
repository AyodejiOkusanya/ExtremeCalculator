document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  initialize();
});

function isOperator(str) {
  return (
    str === "+" || str === "-" || str === "÷" || str === "=" || str === "x"
  );
}

const initialState = {
  firstValue: "",
  operator: "",
  secondValue: "",
  screenValue: "0",
};

let state = initialState;

const updateState = (e) => {
  const str = e.target.textContent;
  const isNumber = !isOperator(str);
  switch (true) {
    case str === "AC":
      state = initialState;
      break;
    case isNumber && !state.operator:
      const newFristValue = state.firstValue + str;
      state = {
        ...state,
        firstValue: newFristValue,
        screenValue: newFristValue,
      };
      break;
    case isNumber && !!state.operator:
      const newSecondValue = state.secondValue + str;
      console.log("here");
      state = {
        ...state,
        secondValue: newSecondValue,
        screenValue: newSecondValue,
      };
      break;
    case !isNumber:
      state = { ...state, operator: str };
      break;
    default:
      break;
  }
};

function initialize() {
  const calculator = document.querySelectorAll(".buttonSection")[0];
  const screen = document.querySelectorAll(".screen")[0];

  const handleButtonClick = (e) => {
    updateState(e);
    screen.textContent = state.screenValue;
  };
  calculator.addEventListener("click", handleButtonClick);
}
