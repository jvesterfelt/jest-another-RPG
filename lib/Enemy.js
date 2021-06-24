const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super();
    }
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

module.exports = Enemy;