var events = require('./pubsub');

var init = function() {

	console.log("Initialising input service");

    window.onkeydown = function(event) {
        events.emit("input", getButtonDownEvent(event.keyCode));
    };

    window.onkeyup = function(event) {
        events.emit("input", getButtonUpEvent(event.keyCode));
    };
};

var getButtonUpEvent = function(keyCode) {
	return {
		action: 'up',
		key: keycodes[keyCode]
	};
};

var getButtonDownEvent = function(keyCode) {
	return {
		action: 'down',
		key: keycodes[keyCode]
	};
};

var keycodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'space',

    65: 'left',
    87: 'up',
    83: 'down',
    68: 'right'
};


module.exports = {
	init: init
};