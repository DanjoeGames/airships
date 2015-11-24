var Entity = function(x, y) {
	this.x = x;
	this.y = y;

	this.xacc = 0;
	this.yacc = 0;

	this.xvel = 0;
	this.yvel = 0;
}

Entity.prototype.move = function(dir, ammount) {
	switch(dir) {
		case 'up': {
			this.y -= ammount;
		}break;

		case 'left': {
			this.x -= ammount;
		}break;

		case 'down': {
			this.y += ammount;
		}break;

		case 'right': {
			this.x += ammount;
		}break;

		default: {
			//do nothing
		}
	}
};

Entity.prototype.update = function() {

	this.xvel += this.xacc / 1; // f = ma -> a = f/m
	this.yvel += this.yacc / 1;

	this.xacc = 0;
	this.yacc = 0;

	this.x += this.xvel;
	this.y += this.yvel;
}

Entity.prototype.applyForce = function(x, y) {
	this.xacc += x;
	this.yacc += y;
}

module.exports = Entity;