function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrStatus = ["Powered Up", "Big", "Small", "Dead"];

var player = {
    name: "",

    totalCoins: 0,

    status: "Small",

    isStarActive: false,

    setName: function (namePicked) {
        var rand = randomNumGenerator(0, 1);
        if (rand === 0) {
            this.name = "Mario";
        } else {
            this.name = "Luigi"
        }
        return this.name;
    },

    gotHit: function () {
        if (this.status=== "Powered Up") {
            this.status = "Big";

        } else if (this.stutus === "Big") {
            this.status = "Small";

        } else if (this.status === "Small") {
            this.status = "Dead";
            this.isGameActive = false;
        }
    },

    gotPoweredup: function () {
        if (this.status === "Small") {
            this.status = "Big";

        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } 
    },
    
    isGameActive: true,
    
    addCoin: function(){
        this.totalCoins ++;
    }, 
    
    print: function(){
        console.log(`The character name is ${this.name}, he has ${this.totalCoins}, his status is ${this.status}`);
    }

}


player.setName();

function range(){
    var valueNum = randomNumGenerator(0, 2);
    if(valueNum === 0){
        player.gotHit();
    } else if (valueNum === 1){
        player.gotPoweredup();
    }else {
        player.addCoin();
    }
}

player.print();

for(var i = 0; i < 3; i++){
    range();
    player.print();
}