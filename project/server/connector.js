var events = require('./events');
var WebSocketServer = require('ws').Server;


var init = function() {
	var socketServer = new WebSocketServer({port: 8080});

	//how to manage new connections
	socketServer.on('connection', function(ws) {
		ws.on('message', function(playerName) {
			events.emit('connection', playerName);

			ws.on('message', function(data) {
				//command stuff
			});
		});
	});

	//how to manage outbound data requests
	events.on('outbound', function(message) {
		//send to all players
	});
};

module.exports = {
	init: init
};
