let exp = null;

function clean() {
    textValue.value = '';
    exp = null;
}

function insert(num) {
    if (textValue.value != undefined) {
        textValue.value += num;
    }

    else {
        textValue.value = num;
    }
    }

function insertIntoExp(num) {
    if (exp != undefined) {
        exp += num;
    }

    else {
        exp = num;
    }
}
    
    function addOne() {
      insert(1);
      insertIntoExp('1');
    }
    
    function addTwo() {
      insert(2);
      insertIntoExp('2');
    }
    
    function addThree() {
      insert(3);
      insertIntoExp('3');
    }
    
    function addFour() {
      insert(4);
      insertIntoExp('4');
    }
    
    function addFive() {
      insert(5);
      insertIntoExp('5');
    }
    
    function addSix() {
      insert(6);
      insertIntoExp('6');
    }
    
    function addSeven() {
      insert(7);
      insertIntoExp('7');
    }
    
    function addEight() {
      insert(8);
      insertIntoExp('8');
    }
    
    function addNine() {
      insert(9);
      insertIntoExp('9');
    }
    
    function addZero() {
      insert(0);
      insertIntoExp('0');
    }
    
    function decimal() {
      insert(".");
      insertIntoExp('.');
    }
    
    function addition() {
      insert("+");
      insertIntoExp('+');
    }
    
    function subtraction() {
      insert("-");
      insertIntoExp('-');
    }
    
    function multiplication() {
      insert('x');
      insertIntoExp('*');
    }
    
    function division() {
      insert("/");
      insertIntoExp('/');
    }
    
    function modulus() {
      insert("%");
      insertIntoExp('%');
    }
    
    function leftPar() {
      insert("(");
      insertIntoExp('(');
    }
    
    function rightPar() {
      insert(")");
      insertIntoExp(')');
    }
    
    function assign() {

        console.log(exp);
        console.log(textValue.value);

        exp = eval(exp);
        textValue.value = exp;
        
        console.log(exp);
        console.log(textValue.value);
        
    }
    
    function cancel() {
        clean();
    }
    
    
    oneBtn.addEventListener('click' , addOne);
    twoBtn.addEventListener('click' , addTwo);
    threeBtn.addEventListener('click' , addThree);
    fourBtn.addEventListener('click' , addFour);
    fiveBtn.addEventListener('click' , addFive);
    sixBtn.addEventListener('click' , addSix);
    sevenBtn.addEventListener('click' , addSeven);
    eightBtn.addEventListener('click' , addEight);
    nineBtn.addEventListener('click' , addNine);
    zeroBtn.addEventListener('click' , addZero);
    plusBtn.addEventListener('click' , addition);
    minusBtn.addEventListener('click' , subtraction);
    multiBtn.addEventListener('click' , multiplication);
    divideBtn.addEventListener('click' , division);
    modBtn.addEventListener('click' , modulus);
    leftParBtn.addEventListener('click' , leftPar);
    rightParBtn.addEventListener('click' , rightPar);
    cancelBtn.addEventListener('click' , cancel);
    assignBtn.addEventListener('click' , assign);
    decBtn.addEventListener('click' , decimal);
    
    
    
    