const cencel = document.getElementById('deleteBtn');
const leftParenthesis = document.getElementById('leftParenthesisBtn');
const rightParenthesis = document.getElementById('rightParenthesisBtn');
const divide = document.getElementById('divideBtn');
const multiply = document.getElementById('multiplyBtn');
const minus = document.getElementById('subtractBtn');
const plus = document.getElementById('addBtn');
const assignment = document.getElementById('assignBtn');
const decimal = document.getElementById('decimalBtn');
const sign = document.getElementById('signBtn');
const one = document.getElementById('1Btn');
const two = document.getElementById('2Btn');
const three = document.getElementById('3Btn');
const four = document.getElementById('4Btn');
const five = document.getElementById('5Btn');
const six = document.getElementById('6Btn');
const seven = document.getElementById('7Btn');
const eight = document.getElementById('8Btn');
const nine = document.getElementById('9Btn');
const zero = document.getElementById('0Btn');



const currentCalculationOutput = document.getElementById('expression');
const currentResultOutput = document.getElementById('finalResult');

function outputResult(text) {
  currentCalculationOutput.textContent = text;
}

function outputFinalResult(result){
    currentResultOutput.textContent = result;
}