// var WebSocket = require('ws');

var init = function() {
	var ws = new WebSocket('ws://localhost:8080');

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

