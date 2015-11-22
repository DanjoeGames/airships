/*
	This has to exist because messages do not travel accross emitters
	and requiring 'events' requires you to instantiate a new emitter every time 
*/

var EventEmitter = require('events');

var emitter = new EventEmitter();

var on = function(type, func) {
	emitter.on(type, func);
};

var emit = function(type, data) {
	emitter.emit(type, data);
};

module.exports = {
	emit: emit,
	on: on
};