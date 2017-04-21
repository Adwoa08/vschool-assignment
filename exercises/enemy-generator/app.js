
//storing enemy in an object
function enemy(type, hitPoints, defense){
    this.type=type;
    this.hitPoints=htPoints;
    this.defense=defense;
}


//program that will select types randomly and each type should have equal chance of being selected.
function selectEnemy(){
var randomEnemySelection = Math.random();

if(Math.random()<=0.33){
   return "Ancient Dragon";
}else if(Math.random()>0.33 && Math.random<=0.66){
    return "Prowler";
} else{
    return "Mighty Grunt";
}

}

console.log(selectEnemy());

//Select hitPoints randomly but according to the enemy type
function seletHitPoints(){
if(selectEnemy=="Ancient Dragon"){
    var hitPoints = Math.random()*21 + 80;
}
}
console.log(seletHitPoints());