const makeOne = (arr) => {
  switch (arr[1]) {
    case "+":
      return (parseInt(arr[0]) + parseInt(arr[2])).toString();
    case "-":
      return (parseInt(arr[0]) - parseInt(arr[2])).toString();
    case "x":
      return (parseInt(arr[0]) * parseInt(arr[2])).toString();
    case "÷":
      return (parseInt(arr[0]) / parseInt(arr[2])).toString();
    default:
      return arr;
  }
};

export const evaluate = (total) => {
  const operationArr = total.split(" ");
  const result = [];
  if (operationArr.length % 2 === 0) {
    return "invalid operation";
  }

  for (let i = 0; i < operationArr.length; i = i + 3) {
    const sum = makeOne(operationArr.slice(i, i + 3));
    !Array.isArray(sum) ? result.push(sum) : result.push(...sum);
  }

  if (result.length > 1) {
    return evaluate(result.join(" "));
  }
  return result.join("");
};
