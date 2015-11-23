/*
	This has to exist because messages do not travel accross emitters
	and requiring 'events' requires you to instantiate a new emitter every time 
*/

var EventEmitter = require('events');

var emitter = new EventEmitter();

module.exports = {
	emit: emitter.emit,
	on: emitter.on
};