var input = require('./input');
var events = require('./pubsub');
var game = require('./game');
var renderer = require('./renderer');
var client = require('./wsclient');

input.init();
game.init();
renderer.init();
client.init();
