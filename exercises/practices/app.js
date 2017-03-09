function twoNumbers(a, b) {
    if (a<b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
twoNumbers(4, 7);


function monkeyTrouble(aSmile, bSmile){
    if (aSmile === bSmile){
        return true;
    } else if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
}


console.log(monkeyTrouble(true, true)) // true  
console.log(monkeyTrouble(false, false)) // true  
console.log(monkeyTrouble(true, false)) //false 


function timeOfDay(){
    var day = new Date();
    if (day.getHours()<12) {
        return "Good morning";
    } else if (day.getHours()>12 && day.getHours()<16){
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

console.log(timeOfDay());
new Date(); it recordsvar d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
