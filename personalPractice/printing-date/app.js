// program that displays day and time
var daysOfTheWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var Dates = new Date();

var dayIndex = Dates.getDay();

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

console.log(timeOfDay());