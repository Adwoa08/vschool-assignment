function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Enemy(type, hitPoints, defense) {
    this.type = type;
    this.hitPoints = hitPoints;
//    this.defense = defense;
}

var enemies = new Enemy (typeAtRandom(), hitPoints());

console.log(enemies);



function typeAtRandom() {
    var randNum = randomNumberGenerator(0, 2);
    if (randNum === 0) {
        Enemy.type = "Ancient Dragon";
    } else if (randNum === 1) {
        Enemy.type = "Prowler";
    } else {
        Enemy.type = "Mighty Grunt";
    }

    return Enemy.type;
}

typeAtRandom();


function hitPoints() {

    if (Enemy.type === "Ancient Dragon") {
        var points = randomNumberGenerator(81, 99);
        Enemy.hitPoints = points;
    } else if (Enemy.type === "Prowler") {
        var points1 = randomNumberGenerator(51, 78);
        Enemy.hitPoints = points1;
    } else {
        var points2 = randomNumberGenerator(21, 48);
        Enemy.hitPoints = points2;
    }
    
    return Enemy.hitPoints;
}


hitPoints();


for(i = 1; i <= 100; i++){
    var enemies = new Enemy (typeAtRandom(), hitPoints());
    console.log("You are " + Enemy.type + " and you have " + Enemy.hitPoints);
    
}



