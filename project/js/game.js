var events = require('./pubsub');
var Entity = require('./entities');
var map = require('./map');

var state = {};

var init = function() {

	state.player = new Entity(50, 50);

	/*
	 * when the map gets bigger and we move this code to the server
	 * we won't be able to send the map every frame
	 *
	 * Consider seding whole map initially, 
	 * then only partial map updates
	 * 
	 */
	state.map = map

	console.log(map);

	events.on('input', function(data) {
		if(data.action == 'up') {
			commands[data.key] = false;
		} else if(data.action == 'down') {
			commands[data.key] = true;
		}
	});

	//game updates 60 times a second . . . for now
	setInterval(tick, 1000 / 60);
};

commands = {
	'up': false,
	'down': false,
	'right': false,
	'left': false
}

var tick = function() {

	//MAGIC NUMBERS !!! :D :D :D
	if(commands['up']) {
		state.player.applyForce(0, -0.1);
	}
	if(commands['down']) {
		state.player.applyForce(0, 0.1);
	}
	if(commands['right']) {
		state.player.applyForce(0.1, 0);
	}
	if(commands['left']) {
		state.player.applyForce(-0.1, 0);
	}

	state.player.update();

	events.emit('gamestate', state);
};

module.exports = {
	init: init
};