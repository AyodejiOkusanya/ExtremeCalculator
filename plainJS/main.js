document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  initialize();
});

const initialState = {
  firstValue: "",
  operator: "",
  secondValue: "",
  screenValue: "0",
};

function isOperator(str) {
  return (
    str === "+" || str === "-" || str === "÷" || str === "=" || str === "x"
  );
}

class State {
  constructor() {
    this.state = initialState;
  }

  getScreenValue() {
    return this.state.screenValue;
  }

  calculate() {
    const { firstValue, operator, secondValue } = this.state;
    switch (operator) {
      case "+":
        return parseFloat(firstValue) + parseFloat(secondValue);
      case "-":
        return parseFloat(firstValue) - parseFloat(secondValue);
      case "x":
        return parseFloat(firstValue) * parseFloat(secondValue);
      case "÷":
        return parseFloat(firstValue) / parseFloat(secondValue);
      default:
        break;
    }
  }

  readyToCalculate(isNumber) {
    return (
      Object.keys(this.state).every((val) => !!this.state[val]) && !isNumber
    );
  }

  updateState(e) {
    const str = e.target.textContent;
    const isNumber = !isOperator(str);

    switch (true) {
      case str === "AC":
        this.state = initialState;
        break;
      case this.readyToCalculate(isNumber):
        const sum = this.calculate();
        this.state = {
          firstValue: sum,
          secondValue: "",
          operator: str !== "=" ? str : "",
          screenValue: sum,
        };
        break;
      case isNumber && !this.state.operator:
        const newFristValue = this.state.firstValue + str;
        this.state = {
          ...this.state,
          firstValue: newFristValue,
          screenValue: newFristValue,
        };
        break;
      case isNumber && !!this.state.operator:
        const newSecondValue = this.state.secondValue + str;
        console.log("here");
        this.state = {
          ...this.state,
          secondValue: newSecondValue,
          screenValue: newSecondValue,
        };
        break;
      case !isNumber:
        this.state = { ...this.state, operator: str };
        break;
      default:
        break;
    }
  }
}

const handleButtonClick = (e, screen, state) => {
  state.updateState(e);
  screen.textContent = state.getScreenValue();
};

function initialize() {
  const calculator = document.querySelectorAll(".buttonSection")[0];
  const screen = document.querySelectorAll(".screen")[0];
  const state = new State();

  calculator.addEventListener("click", (e) =>
    handleButtonClick(e, screen, state)
  );
}
