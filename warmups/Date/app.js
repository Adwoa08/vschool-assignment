//
//function printDate(){
//    var dateValues = new Date();
//    var dateValue = date.day();
//    return "Today is:" + days;
//}
//
//console.log(printDate());


var theDAte = new Date();

var days = ["Sunday",]

var daysIndex = theDate.getDay();

var day = days[daysIndex];

var hrs = theDate.getHours();
var mins = theDate.getMinutes();
var secs = theDAte.getSeconds();

var ampm;
if (hrs>=12) {
    ampm="PM"
    hrs=24 - hrs;
} else {
    ampm = "AM"
}

if (mins<10) {
    mins="0" + mins;
}

if (secs<10){
    secs="0" + secs;
}

console.log("Today is: " +day);
console.log("Current time is: " + hrs + ":" + mins + ":" + secs + " " + ampm);