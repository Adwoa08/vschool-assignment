var myFriends = ["Seth", "Aboabo", "Jaclyn"];

//Array will store the names as numbers(index) starting form 0

var i = 0;
while (i < myFriends.length){
    myFriends[i];
    i++; //to prevent it from becoming an infinit loop
}

var readlinesync = require ("readline-sync");

do {
var name = readlinesync.question("What is your name? ");

   
if(name = myFriends[0]){
    console.log("I know you! You are a friend Ghana, " + name +"!");
} else if(name = myFriends[1]){
    console.log("I know you! You are a friend Hawaii, " + name +"!");
} else if(name = myFriends[2]){
    console.log("I know you! You are a friend Utah, " + name +"!");
} 
} while (name != myFriends[i]);