var events = require('./events');
var entity = require('./entities');

var players = {};

var init = function() {
	events.on('client_message', function(data) {
		data.player
	});

	events.on('connection', function(data) {
		players[data.player] = new Player(0,0);
		events.emit('outbound', players)
	});
}

module.exports = {
	init:init
};
