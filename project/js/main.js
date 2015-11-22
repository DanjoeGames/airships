var input = require('./input');
var events = require('./pubsub');
var game = require('./game');
var renderer = require('./renderer');

input.init();
game.init();
renderer.init();