const addNumber = (num1, num2, callBackFunction) => {
  const result = num1 + num2;
  callBackFunction(result);
};

const multiplicationNumber = (num1, num2, callBackFunction) => {
  const result = num1 * num2;
  callBackFunction(result);
};

const printMultiplicationResult = (res) => {
  console.log(`This is the result of multiplication ${res}`);
};

const printAdditionResult = (res) => {
  console.log(`This is the result of multiplication ${res}`);
};

addNumber(2, 3, printMultiplicationResult);
multiplicationNumber(4, 5, printAdditionResult);
