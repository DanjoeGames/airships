var WebSocketServer = require('ws').Server;

SocketServer = new WebSocketServer({port: 8080});

SocketServer.on('connection', function(ws) {
	ws.on('message', function(message) {
		console.log("received: message");
		ws.send('Your call is important to us');
	});

	ws.send('You are connected! You call may be recorded for training purposes');
});

