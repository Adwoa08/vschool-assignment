//var sumTwoNumbers = function(num4, num5){
//     return num4 + num5;
//}
//
//console.log(sumTwoNumbers(4,3));
//
//
//var largestNumberOfThree = function (num1, num2, num3){
//    if (num1 >= num2 && num1 >= num3) {
//        return "The largest number is " + num1;
//    } else if (num2>=num3 && num2 >=num1) {
//        return "The largest number is " + num2;
//    } else {
//        return "The largest number is " + num3;
//    }
//}
//
//console.log(largestNumberOfThree(10, 8, 11));
//var odds = [];
//var evens = [];
//var exampleArray = [2, 1, 3, 4];

function oddOrEven(num){
    if(num % 2 ===0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(oddOrEven(3));
