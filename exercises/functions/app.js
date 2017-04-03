var sumTwoNumbers = function(num4, num5){
     return num4 + num5;
}

console.log(sumTwoNumbers(4,3));


var largestNumberOfThree = function (num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        return "The largest number is " + num1;
    } else if (num2>=num3 && num2 >=num1) {
        return "The largest number is " + num2;
    } else {
        return "The largest number is " + num3;
    }
}

console.log(largestNumberOfThree(10, 8, 11));
var odds = [];
var evens = [];
var exampleArray = [2, 1, 3, 4];

function oddOrEven(num){
    if(num % 2 ===0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(oddOrEven(3));


function sumOfTwoNum(num1, num2) {
    return num1 + num2;
}
console.log(sumOfTwoNum(2, 3));

function largestOfThreeNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "The largest number is " + num1;
    } else if (num2 > num3 && num2 > num1) {
        return "The largest number is " + num2;
    } else {
        return "The largest number is " + num3;
    }
}
console.log(largestOfThreeNum(10, 6, 4));


function evenOrOdd(num) {
    if ((num % 2) === 0){
        return num +" is an even number";
    }else {
        return num + " is an odd number";
    }
}
console.log(evenOrOdd(3));

function manipulateString(str){
    var newString = "";
    var halfString = "";
    if(str.length <= 20){
        newString += str + str;
    } else{
        newString += str.substring(0, ( str.length) / 2);
    }
    
    return newString;
}

console.log(manipulateString("I love you morefasdfsadfdsaffasdf she"));
