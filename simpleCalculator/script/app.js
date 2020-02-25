const defaultResult = 0;
var currentResult = defaultResult;
var currentNumber = 0;
var recentNumberEntered = '';
var expression;
var lastOprator = '';




function get1(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '1';
    expression = expression  + '1';
    window.console.log(expression);
    outputResult(expression);

}

function get2(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '2';
    expression = expression  + '2';
    window.console.log(expression);
    outputResult(expression);
}

function get3(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '3';
    expression = expression  + '3';
    window.console.log(expression);
    outputResult(expression);
}

function get4(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '4';
    expression = expression  + '4';
    window.console.log(expression);
    outputResult(expression);
}

function get5(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '5';
    expression = expression  + '5';
    window.console.log(expression);
    outputResult(expression);
}

function get6(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '6';
    expression = expression  + '6';
    window.console.log(expression);
    outputResult(expression);
}

function get7(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '7';
    expression = expression  + '7';
    window.console.log(expression);
    outputResult(expression);
}

function get8(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '8';
    expression = expression  + '8';
    window.console.log(expression);
    outputResult(expression);
}

function get9(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '9';
    expression = expression  + '9';
    window.console.log(expression);
    outputResult(expression);
}

function get0(){
    expression = currentCalculationOutput.innerHTML;
    recentNumberEntered = recentNumberEntered + '0';
    expression = expression  + '0';
    window.console.log(expression);
    outputResult(expression);
}

function sum(){
     expression = currentCalculationOutput.innerHTML;
     currentNumber = parseInt(recentNumberEntered);
     currentResult = currentResult + currentNumber;
     recentNumberEntered = '';
     expression = expression  + '+';
     lastOprator = '+';
     outputResult(expression);
     outputFinalResult(currentResult);
}


function assign(){
    if(lastOprator == '+'){
         sum();
    }
    else if(lastOprator == '-'){
        sub();
    }
    
    
}


plus.addEventListener('click', sum);
assignment.addEventListener('click', assign);


one.addEventListener('click', get1);
two.addEventListener('click', get2);
three.addEventListener('click', get3);
four.addEventListener('click', get4);
five.addEventListener('click', get5);
six.addEventListener('click', get6);
seven.addEventListener('click', get7);
eight.addEventListener('click', get8);
nine.addEventListener('click', get9);
zero.addEventListener('click', get0);
