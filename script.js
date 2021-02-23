let display = document.getElementById('display');

$("#display").innerHTML = 0;

let allInput = [];
let operators = [];

let currentInput = '';
let wasOperator = false;

function clickZero() {
    if (currentInput.length == 1 && currentInput[0] == '0') {
        return;
    }
    currentInput += '0';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#zero").on("click", clickZero);

function clickOne() {
    currentInput += '1';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#one").on("click", clickOne);

function clickTwo() {
    currentInput += '2';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#two").on("click", clickTwo);

function clickThree() {
    currentInput += '3';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#three").on("click", clickThree);

function clickFour() {
    currentInput += '4';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#four").on("click", clickFour);

function clickFive() {
    currentInput += '5';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#five").on("click", clickFive);

function clickSix() {
    currentInput += '6';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#six").on("click", clickSix);

function clickSeven() {
    currentInput += '7';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#seven").on("click", clickSeven);

function clickEight() {
    currentInput += '8';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#eight").on("click", clickEight);

function clickNine() {
    currentInput += '9';
    $("#display").html(currentInput);
    wasOperator = false;
}
$("#nine").on("click", clickNine);

function clickClear() {
    currentInput = '';
    allInput = [];
    operators = [];
    $("#display").html("0");
    wasOperator = false;
}
$("#clear").on("click", clickClear);

/**
 * Pentru verificarea cu mai multe semne, se verifica intai daca are deja un minus in input-ul curent si daca s-a folosit un operator in penultima operatie
 * Daca intoarce true, atunci scoatem operatorul si il inlocuim cu cel nou
 */

function clickMultiply() {
    if (containsNegative(currentInput) && wasOperator) {
        currentInput = '';
        operators.pop();
        operators.push('*');
        wasOperator = true;
        return;
    }
    if (wasOperator == true) {
        operators.pop();
        operators.push('*');
        wasOperator = true;
    }
    else {
        operators.push('*');
        wasOperator = true;
        allInput.push(currentInput);
        currentInput = '';
    }
    
}
$("#multiply").on("click", clickMultiply);

function clickDivide() {
    if (containsNegative(currentInput) && wasOperator) {
        currentInput = '';
        operators.pop();
        operators.push('/');
        wasOperator = true;
        return;
    }
    if (wasOperator == true) {
        operators.pop();
        operators.push('/');
        wasOperator = true;
    }
    else {
        operators.push('/');
        wasOperator = true;
        allInput.push(currentInput);
        currentInput = '';
    }
    
}
$("#divide").on("click", clickDivide);


function clickSubtract() {
    if (wasOperator == true) {
        currentInput = '';
        currentInput += '-';
        wasOperator = true;
    }
    else {
        operators.push('-');
        wasOperator = true;
        allInput.push(currentInput);
        currentInput = '';
    }
}
$("#subtract").on("click", clickSubtract);

function clickAdd() {
    if (containsNegative(currentInput) && wasOperator) {
        operators.pop();
        currentInput = '';
        operators.push('+');
        wasOperator = true;
        return;
    }
    if (wasOperator == true) {
        operators.pop();
        operators.push('+');
        wasOperator = true;
    }
    else {
        operators.push('+');
        wasOperator = true;
        allInput.push(currentInput);
        currentInput = '';
    }
    
}
$("#add").on("click", clickAdd);

function clickDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
}
$("#decimal").on("click", clickDecimal);

let result = 0;

function clickEquals() {
    allInput.push(currentInput);
    currentInput = '';

    result = formatNumber(allInput[0]);
    let contor = 0;

    for (let i = 1; i < allInput.length; ++i) {
        let number = formatNumber(allInput[i]);
        if (operators[contor] == '+') {
            contor++;
            result += number;
        }
        else if (operators[contor] == '-') {
            contor++;
            result -= number;
        }
        else if (operators[contor] == '*') {
            contor++;
            result *= number;
        }
        else if (operators[contor] == '/') {
            contor++;
            result /= number;
        }
    }
    allInput = [];
    currentInput = result.toString();
    operators = [];
    $("#display").html(result);
}
$("#equals").on("click", clickEquals);

function formatNumber(number) {
    if (number.includes('.')) return parseFloat(number);
    else return parseInt(number);
}

function containsNegative(input) {
    if (input.includes('-')) return true;
    return false;
}

