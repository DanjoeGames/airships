/*
	This has to exist because messages do not travel accross emitters
	and requiring 'events' requires you to instantiate a new emitter every time 
*/

var Events = require('events');

var emitter = new Events.EventEmitter();

module.exports = {
	emit: emitter.emit,
	on: emitter.on
};