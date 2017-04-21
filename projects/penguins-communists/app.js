//Random number generator constructor
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//constructor function for penguins and commmunists
function Parties(name, population) {
    this.name = name;
    this.population = 1000000;
}

// function to see who attacks first
var whoAttackedFirst = "";

function attack() {
    var randNum = randomGenerator(1, 2);
    if (randNum === 1) {
        whoAttackedFirst = "Penguins";
        console.log(whoAttackedFirst + " attacked first.");
    } else {
        whoAttackedFirst = "Communists";
        console.log(whoAttackedFirst + " attacked first.");
    }
//    return whoAttackedFirst;
}
attack();


//creating the parties
//var penguins = new Parties("Penguins");

//object of the party that will be attacked.
var partyC = new Parties("Communists");
var partyP = new Parties("Penguins");





//callback functions
function onHit(party){
    var attackDamage = randomGenerator(1000, 10000);
    console.log(party.name + " attacked and wiped out " + attackDamage + " people!");
   if(party.name === "Penguins"){
       partyC.population -= attackDamage;
   } else{
       partyP.population -= attackDamage;
   }
}

//
function onMiss(party){
    var attackDamage = randomGenerator(1000, 10000);
    console.log(party.name + " totally missed!"); 
}


//
function sendNuke(party, onHit, onMiss) {
    var randNum = randomGenerator(1, 2);
    if(randNum === 1){
        onHit(party);
    } else {
        onMiss(party);
    }
}

var whoIsAttacking = whoAttackedFirst;

while (partyC.population > 0 && partyP.population > 0){
    console.log("Penguins: "+partyP.population);
    console.log("Communists: "+partyC.population);
    if(whoIsAttacking === "Penguins"){
        sendNuke(partyP, onHit, onMiss);
        whoIsAttacking = "Communists";
    } else if (whoIsAttacking === "Communists"){
        sendNuke(partyC, onHit, onMiss);
        whoIsAttacking = "Penguins";
    }  
}

if(partyP.population > 0){
    console.log("The penguins won the fight!");
} else {
    console.log("The Communists won the fight!");
}