document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  initialize();
});

function isOperator(str) {
  return str === "+" || str === "-" || str === "÷" || str === "=";
}

function initialize() {
  const calculator = document.querySelectorAll(".buttonSection")[0];
  const screen = document.querySelectorAll(".screen")[0];

  const handleButtonClick = (e) => {
    if (!isOperator(e.target.value)) {
      console.log(e.target.value);
      screen.textContent = e.target.textContent;
    }
  };
  calculator.addEventListener("click", handleButtonClick);
}
