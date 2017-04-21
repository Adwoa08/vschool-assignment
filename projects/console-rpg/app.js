var readlinesync = require("readline-sync");

function PlayerConstractor(name) {
    this.name = name;
    this.HP = 6;
    this.inventory = ['sharp stick'];
}


function awardItem(){
    var items = [" banana", " water", " Knife"];
    var index = randomGenerator(0, 2);
    console.log("You just found " + items[index] + "!")
    player1.inventory.push(items[index]);
}

var name = readlinesync.question("what is your name? ");

var player1 = new PlayerConstractor(name);

var userAnswer;

//Walk or Quit function/////////////////
function walkOrQuit(){
    userAnswer = readlinesync.question(name + ", press 'w' to walk or 'q' to quit ");
}

walkOrQuit();


//Run or fight ////////////////////////
function fightOrRun(){
    fightRun = ['Fight', 'Run'];
    aRindex = readlinesync.keyInSelect(fightRun, "What do you want to do? ");
    if(aRindex === 0){
        fight();
    } else {
        run();
    }
}

//fight function
function fight(){
    var randomNum = randomGenerator(1, 3);
    if(randomNum < 2){
        console.log("You attacked and dealt " + randomGenerator(1, 2) + " damage");
        console.log("You didn't do enough damage, so the enemy attacks back!");
        console.log("You managed to win but still lost a lot of  hp from this fight.");
        player1.HP -= randomGenerator(1, 3);
        walkOrQuit();  
    } else {
        console.log("You caused the enemy " + randomGenerator(6, 10) + " damage!");
        console.log("You killed the enemy.");
        player1.HP += 2;
        awardItem();
        walkOrQuit();  
    }
}

function run(){
    var randomNum = randomGenerator(1, 2);
    if (randomNum = 1){
        console.log("You are so luck you got to escape.");
        walkOrQuit();
    } else {
        console.log("Unforturnately, you couldn't escape without a damage.");
        player1.HP -= 2;
        walkOrQuit();
    }
}


//Random generator function
function randomGenerator(min, max){
    return Math.floor(Math.random() * max) + min;
};



//Appear function////////////////////////////////////////////////
function enemyAppears(){
    //var enemyList = "";
    var randomNum = randomGenerator(1, 4);
    if(randomNum === 1){
        console.log("The is a Gorilla on your way. ");
        fightOrRun();
    }
    if(randomNum === 2){
        console.log("A Tiger is approaching");
        fightOrRun();
    }
    if(randomNum === 3){
        console.log("There is an Alien about to attack you.");
        fightOrRun();
    }
    if(randomNum === 4){
        console.log("There is Tiger hiding in the jungle. What do you want do?");
        fightOrRun();
    }
}

function walk(){
    var randomNum = randomGenerator(1, 4);
    if(randomNum === 1){
        enemyAppears();
    } else {
        console.log("There are no enemies");
        walkOrQuit();
    }
}

//walk function
while(player1.HP > 0 && userAnswer != "q"){
    if(userAnswer === "i"){
        console.log("Name: " + player1.name);
        console.log("HP: " + player1.HP);
        console.log("Inventory: " + player1.inventory);
        walkOrQuit();
        continue;
    }
    walk();
}




//quit function
function quit(){
    console.log("Too bad you missed out the adventures ahead. Have a good one.");
}



//User answer conditions////////////////////////////////
if(userAnswer === "q"){
    quit();
}


if(player1.HP <= 0){
    console.log("You died due to your injuries!");
}
