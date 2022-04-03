// const makeOne = (arr) => {
//   switch (arr[1]) {
//     case "+":
//       return (parseFloat(arr[0]) + parseFloat(arr[2])).toString();
//     case "-":
//       return (parseFloat(arr[0]) - parseFloat(arr[2])).toString();
//     case "x":
//       return (parseFloat(arr[0]) * parseFloat(arr[2])).toString();
//     case "÷":
//       return (parseFloat(arr[0]) / parseFloat(arr[2])).toString();
//     default:
//       return arr;
//   }
// };

export function evaluate(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return (parseFloat(firstValue) + parseFloat(secondValue)).toString();
    case "-":
      return (parseFloat(firstValue) - parseFloat(secondValue)).toString();
    case "x":
      return (parseFloat(firstValue) * parseFloat(secondValue)).toString();
    case "÷":
      return (parseFloat(firstValue) / parseFloat(secondValue)).toString();
    default:
      return "something went wrong";
  }
}

// export const evaluate = (total) => {
//   const operationArr = total.split(" ");
//   const result = [];
//   if (operationArr.length % 2 === 0) {
//     return "invalid operation";
//   }

//   for (let i = 0; i < operationArr.length; i = i + 3) {
//     const sum = makeOne(operationArr.slice(i, i + 3));
//     !Array.isArray(sum) ? result.push(sum) : result.push(...sum);
//   }

//   if (result.length > 1) {
//     return evaluate(result.join(" "));
//   }
//   return result.join("");
// };
