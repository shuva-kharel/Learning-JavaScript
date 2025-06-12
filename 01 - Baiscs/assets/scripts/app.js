const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserInput() {
  return parseFloat(userInput.value);
}

function writeToLog(previousResult, operation, enteredNumber, currentResult) {
  const logEntry = {
    previousResult: previousResult,
    operation: operation,
    enteredNumber: enteredNumber,
    currentResult: currentResult
  }
  logEntries.push(logEntry)
  console.log(logEntry)
}

function calculateResult(operation) {
  let previousResult = currentResult;
  let enteredNumber = getUserInput();

  if ((operation == '+' ||
    operation == '-' ||
    operation == '*' ||
    (operation == '/' && enteredNumber != 0)) &&
    !isNaN(enteredNumber)) {
    createAndWriteOutput(operation, previousResult, enteredNumber);
  }
}

function createAndWriteOutput(operation, previousResult, enteredNumber) {
  if (operation === '+') {
    currentResult += enteredNumber;
  } else if (operation === '-') {
    currentResult -= enteredNumber;
  } else if (operation === '*') {
    currentResult *= enteredNumber;
  } else if (operation === '/') {
    currentResult /= enteredNumber;
  }

  outputResult(currentResult, `${previousResult} ${operation} ${enteredNumber}`);
  writeToLog(previousResult, operation, enteredNumber, currentResult);
}

addBtn.addEventListener('click', () => calculateResult('+'));
subtractBtn.addEventListener('click', () => calculateResult('-'));
multiplyBtn.addEventListener('click', () => calculateResult('*'));
divideBtn.addEventListener('click', () => calculateResult('/'));