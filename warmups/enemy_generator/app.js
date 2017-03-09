//from Tim
//var enemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
//
//function Enemy(type, hitPoints, defense) {
//   this.type =  type;
//   this.hitPoints = hitPoints;
//   this.defense = defense;
//}
//
//var enemy = {
//   types: "unknown",
//   hitPoint: "unknown",
//   defenses: "unknown",
//}
//
//var newEnemiesArray = [];
//for (var i = 0; i < 100; i++) {
//   typeGenerator();
//   hitPointsGenerator();
//   defenseGenerator();
//   var newEnemy = new Enemy(enemy.types, enemy.hitPoint, enemy.defenses);
//   newEnemiesArray.push(newEnemy);
//}
//
//
//function typeGenerator() {
//   var typeNumber = Math.random();
//   if (typeNumber < .33) {
//       enemy.types = enemies[0];
//   } else if (.66 > typeNumber > .33 ) {  
//       enemy.types = enemies[1];
//   } else {
//       enemy.types = enemies[2];
//   }
//   return (enemy.types);
//}
//
//
//function hitPointsGenerator () {
//   if (enemy.types == "Ancient Dragon") {
//       enemy.hitPoint = Math.floor(Math.random() * 21) + 80;
//   } else if (enemy.types == "Prowler") {
//       enemy.hitPoint = Math.floor(Math.random() * 30) + 50;
//   } else {
//       enemy.hitPoint = Math.floor(Math.random() * 30) + 20;
//   }
//   return (enemy.hitPoint);
//}
//
//
//function defenseGenerator () {
//   enemy.defenses = (enemy.hitPoint * 3);
//   return (enemy.defenses);
//}
//
//
//console.log(newEnemiesArray);
//console.log(newEnemiesArray.length);

//var enemyList = ["Ancient Dragon", "Prowler", "Mighty Grunt"];


function Enemy(type, hitPoints, defense){
    this.Type = type;
    this.HitPoints = hitPoints;
    this.Defense = defense;
}




function randomType(){
    var ranDom = Math.random();
    ranDom = Math.random() * 5;
    if(ranDom<=2){
        return "Ancient Dragon";
    } else if (ranDom > 2 && ranDom <= 3){
        return "Prowler";
    } else {
        return "Mighty Grunt";
    }
}




//function points(){
//    if(ranPoints > 80 && ranPoints < 100){
//        return "hitPoints is: " + ranPoints;
//    } else if(ranPoints < 80 && ranPoints > 50){
//        return "hitPoints is: " + ranPoints;
//    }  else if(ranPoints < 50 && ranPoints > 20){
//        return "hitPoints is: " + ranPoints;
//    }
//}

//Defines my hitPoints at random
function points(){
    
    if(typesOfEnemy==="Ancient Dragon"){
        return  Math.floor(Math.random() * 21) + 80;
    } else if(typesOfEnemy==="Prowler"){
        return Math.floor(Math.random() * 30) + 50;
    }  else if(typesOfEnemy==="Mighty Grunt"){
        return Math.floor(Math.random() * 30) + 20;
    }
}
var numberOfPoints = points();


//defines my defense 
function defenseby3(){
    return numberOfPoints * 3;
}



//enemy list



var enemyList = [];

for(var i=0; i<100; i++){
    var typesOfEnemy = randomType();
    var numberOfPoints = points();
    var defensePoints = defenseby3();
    var enemy = new Enemy (typesOfEnemy, numberOfPoints, defensePoints);
    enemyList.push(enemy);
    console.log(enemyList[i]);
}

console.log(enemyList);
