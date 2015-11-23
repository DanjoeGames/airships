// var WebSocket = require('ws');

var init = function() {
	var ws = new WebSocket('ws://localhost:8080');

	console.log(ws);

	// ws.on('open', function() {
	// 	ws.send('Hi!!');
	// });

	// ws.on('message', function(data, flags) {
	// 	console.log(data);
	// });
	ws.onopen = function(event) {
		ws.send('Hi!');
	};

	ws.onmessage = function(event) {
		console.log(event.data);
	};
};

module.exports = {
	init: init
};

