// program that displays day and time
var daysOfTheWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var Dates = new Date();

//Date() get the day as an index so we get the index of the day and apply that onthe days of the week
var dayIndex = Dates.getDay();


//Day index is applied on the day of the week
var day = daysOfTheWeek[dayIndex];



var hours = Dates.getHours();
var mins = Dates.getMinutes();
var secs = Dates.getSeconds();

console.log("Today is: " + day);

function timeOfDay() {
    if(hours<12 && hours>=0){
        return "Current time is: " + hours + ":" + mins + ":" + secs + " " + "AM";
    } else {
        return "Current time is:" + hours + ":" + mins + ":" + secs + " " + "PM";
    }
} 

//Greeting to the timeOfDay
function greetings(){
    if(hours < 12 && hours >= 0){
        return `Good morning`;
    } else if(hours >= 12 && hours < 16){
        return `Good afternoon`;
    } else{
        return `Good evening`;
    }
}

console.log(timeOfDay());
console.log(greetings());
