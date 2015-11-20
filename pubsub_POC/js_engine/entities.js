var Entity = function(x, y) {
	this.x = x;
	this.y = y;
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
