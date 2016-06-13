// Enemies our player must avoid

var Enemy = function(startY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -1 * 101;
    this.y = startY * 83 - 15;
    this.s = speed;
    

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // do somethimg with this .speed
    this.x = this.x + this.s * dt;
   
   if (this.x > 505){
    allEnemies.splice(allEnemies.indexOf(this), 1);
   };

  
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class


var Player = function(){
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';

};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(){
    this.x = this.x;
    this.y = this.y;
//calls collision detection function
    this.collisionCheck();

    if (this.y < 10){
    
    this.positionReset();
    
    
   }
    
};
//checks to see if player and enemy collide, if so, then reset player
Player.prototype.collisionCheck = function(){
    for (var i = 0; i < allEnemies.length; i++){
            if(Math.abs(player.x - allEnemies[i].x) < 30 && Math.abs(player.y - allEnemies[i].y < 30)){
                this.positionReset();
            }
        }
};

// resets player position
Player.prototype.positionReset = function(){
    this.x = 200;
    this.y = 400;

};

//draws character
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//player controls
Player.prototype.handleInput = function(key){

    if (key === "left") {
        if(this.x -101 > -20){
            this.x = this.x - 100;
        }
    } else if(key === "right") {
        if(this.x + 101 < 500) {
            this.x = this.x + 100;
        }
    } else if(key === "up") {
        this.y = this.y - 83;
        if(this.y < 0) {
            this.y = 300;
        }
    } else if (key === "down") {
        if(this.y + 83 < 404) {
        this.y = this.y + 83;
        }
    }
};

var player = new Player();

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// All the lanes, from top to bottom. Top is 1, bottom is 3.
var lanes = [
    {
        number: 1,
        probability: 0.9,
        speed: Math.random() * 80 + 100,
    },
    {
        number: 2,
        probability: 0.5,
        speed: Math.random() * 60 + 150,
    },
    {
        number: 3,
        probability: 0.8,
        speed: Math.random() * 70 + 100,
    },
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
