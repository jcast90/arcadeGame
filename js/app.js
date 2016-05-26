// Enemies our player must avoid




var Enemy = function(startY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0 * 101;
    this.y = startY * 83 - 15;
    this.s = speed * 4/1000;

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
    this.x++;
    this.s++;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var newEnemy = new Enemy(1);

var newEnemy2 = new Enemy(2);

var newEnemy3 = new Enemy(3)

var allEnemies = [newEnemy, newEnemy2, newEnemy3];

var Player = function(){
    
};

Player.prototype.update = function(){};
Player.prototype.render = function(){};
Player.prototype.handleInput = function(){};
var player = new Player();
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
