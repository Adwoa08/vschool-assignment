var readlinesync = require("readline-sync");

//This stores the players name
var name = "";
name = readlinesync.question("Hello there! What is your name? ");


//This ask the player whether he wants to continue 
var next = "";
next = readlinesync.keyInYN("Welcome, " + name + "! " + "Do you want to continue on this adventure of a lifetime? ");  


//The walking code
function walking(){
    var enemyAppear = Math.random();
    if (enemyAppear < 0.34){
        console.log("A wild enemy is approaching!");
    } else {
        console.log("There are no enemies.");
    }
}

var walkAnswer = readlinesync.question("If you want to walk, enter 'w'");


if(walkAnswer === "w"){
    walking(); 
}

//Selecting the type of enemy that appears when player keeps walking
var wildEnemy = ["Dragon", "Prowler", "Lion"];

function enemyToAppear(){
    var enemyAppear = Math.random();
    if(enemyAppear < 0.335)
}




//
//
//    for(var i; i < wildEnemy.length; i++){
//        if(wildEnemy[i] === "Dragon"){
//            console.log("A Dragon is approaching.");
//        }
//        if(wildEnemy[i] === "Prowler"){
//            console.log("A Prowler is approaching.");
//        }
//        if(wildEnemy[i] === "A Lion is approaching.");
//    }

    
//   var randomEnemy = Math.random();
//    if(randomEnemy > 0 && randomEnemy < 0.25){
//        
//    }
