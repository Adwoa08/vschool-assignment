var readlinesync = require("readline-sync");
var PlayerConstractor = function (name, HP, inventory) {
    this.name = name;
    this.HP = HP;
    this.inventory = inventory;
}

var inventory = ["water", "shield", "banana"];
var HP = 10;

var name = readlinesync.question("You are on the phone with this dude and according to himn the only way to save your child is either pay a ransom or go through a scary jungle to rescue you baby. You have no job and the bank won't give you a loan due to your bad credit score. Your only way to get your baby is to go rescue him. You are the last of your generation and we need to know your name in case you die and your child survives. With that being said, what name do you go by? ");

var player1 = new PlayerConstractor(name, HP, inventory);

var gameInstructions = readlinesync.question(name + ", because we don't have money either, we will continue to support you with everything we have to survive. But remember you are the only person who can decide whether you live or die. Whenever you want to quit and let your baby die, just press the 'q'. Press 'w' to walk,  'r' to run, 's' to choose a weapon and 'a' to attack. If  you forget any of these instructions just press 'i'. At this point we wish you all the best on what you choose to do next! Remember we are here to help you so go ahead make your first choice into your future. ");

//enemy list
var enemyList="";
function enemyAtRandom(){
    if(Math.random() <= 0.33){
        enemyList = "Alien";
    } else if(Math.random()>0.33 && Math.random <= 0.8){
        enemyList = "Reaper";
    } else {
        enemyList = "Monkey";
    }
    return enemyList;
}

// Attack or Run selections
function inventoryAtRandom(){
    var weapon = '';
    if(Math.random < 0.45){
        weapon = inventory.pop();
        console.log("You are attacking with " + weapon);
    } else {  
         weapon = inventory[0];
        console.log("You are attacking with " + weapon);
    }
}

function attack(){
    inventoryAtRandom();
    walk();
}

//Run function
function hpReduction(){
    if(Math.random()<0.5){
        HP = HP - 2;
    } else {
        HP = HP -5;
    }
}

function escape(){
    if(Math.random()>=0.5){
       console.log("You might not be able to escape next time, so prepare yourself. ");
        walk();
    } else {
        console.log("Unfortunately, you couldn't escape. The enemy attacked you. Your lost HP during this attack.")
        hpReduction();
        console.log("This is the HP you have left " + HP);
        walk();
    }
}

function run(){
    escape();
}

function attackOrRun(){
    attackRun = ['Attack', 'Run'];
    aRindex = readlinesync.keyInSelect(attackRun, "What do you want to do? ");
    if(aRindex === 0){
        attack();
    } else {
        run();
    }
}


//Walk function while
function walk(){
    if(Math.random()<0.33){
        console.log("There are no enemies around. You can keep walking.");
        gameInstructions = readlinesync.question("Press 'w' to keep walking ");
    } else{
        console.log("A or An " + enemyAtRandom() + ", is about to attack! These are you options");
        attackOrRun();
    }  
}





//User input instructions and what should happen in each case.

    if(gameInstructions == "w"){
        walk();
    }
    

    if(gameInstructions == "q"){
        console.log("I understand how you would choose your life over your childs! We wish you all the best.")
    }
    

    if(gameInstructions == "Print"){
        console.log(player1);
    }




//} while(gameInstructions == "w" || "q" || Print);




//function attackOrRun(){
//    attackRun = ['Attack', 'Run'];
//    aRindex = readlinesync.keyInSelect(attackRun, "What do you want to do? ");
//    if(aRindex === 0){
//        attack();
//    } else {
//        run();
//    }
//}