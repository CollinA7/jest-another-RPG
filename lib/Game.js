const inquirer = require('inquirer');
const Enemy = require('./Enemy')
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [
    ];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skelton', 'axe'));
    
    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    // Destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        //tests the object creation
        this.startNewBattle(this.currentEnemy, this.player)
    })
}

module.exports = Game;