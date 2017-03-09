var readlineSync = require("readline-sync");

var firstNum = readlineSync.question("Please enter your first number ");

var secondNum = readlineSync.question("Please enter your second number ");

var operation = ["add", "sub", "mul", "div"];

index = readlineSync.keyInSelect(operation, "Please enter the operation to perform: ");



function addTwoNumbers(num1, num2){
    return num1 + num2;
}

function multiplyTwoNumbers(num1, num2){
    return parseInt(num1) * parseInt(num2);
}


function divideTwoNumbers(num1, num2){
    
    return parseInt(num2)/parseInt(num1);
}

function subtractTwoNumbers(num1, num2){
    return parseInt(num2) - parseInt(num1);
}
             

function userInput(num1, num2){
    if(index === 0){
       return addTwoNumbers(parseInt(num1), parseInt(num2));
    }

    if(index === 1){
       return subtractTwoNumbers(parseInt(num1), parseInt(num2));
    }
    
    if(index=== 2){
       return multiplyTwoNumbers(parseInt(num1), parseInt(num2));
    }
    
    if(index=== 3){
        return divideTwoNumbers(parseInt(num1), parseInt(num2));
    }
    
    if(index === undefined){
        return "You canceled";
    }
}


console.log("The result is: "+ userInput(firstNum, secondNum));
