var player = {
    name: "Mario",
    totalCoins: 0,
    status: "small",
    isStarActive: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },

    gotHit: function () {
        if(this.status === "Powered Up") {
            this.status = "Big";
        } else if(this.status === "Big") {
            this.status = "Small";
        } else if(this.status === "Small"){
            this.status = "Dead";
            this.isGameActive = false;
        } 
    },
    
    gotPowerup: function(){
        if(this.status === "Small"){
            this.status = "Big";
        } else if(this.status === "Big"){
            this.status = "Powered Up";
        }
    },
    
    
    
    isGameActive: true,
        
    addCoin: function(){
        this.totalCoins ++;
    },
    
    printStats: function(){
        var starMessage = "Don't have  stats";
        if(this.isStarActive) starMessage = "do have a star";
        console.log(`the character name is ${this.name}, and you have ${this.totalcoins} coins, you are ${this.status}, and you are ${this.status}, and you are ${starMessage}`)
    }
}





function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function action(){
    var random = randomNumGenerator(0, 2);
    if(random === 0){
        player.gotHit();
    } else if(random === 1){
        player.gotPowerup();
    } else if(random === 2){
        player.addCoin();
    }
}

player.printStats();

for(var i = 0; i < 3; i++){
    action();
    player.printStats();
}
