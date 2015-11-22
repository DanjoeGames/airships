var events = require('./pubsub');
var pixi = require('pixi.js');

var gameState = {};

var running = false;

var context;

var renderer;

var stage;

var init = function() {

	renderer = pixi.autoDetectRenderer(640, 480);
	document.getElementById('container').appendChild(renderer.view);

	stage = new pixi.Container();

	context = new pixi.Graphics();

	stage.addChild(context);

	stage.addChild(context)

	events.on('gamestate', function(data) {

		gameState = data;

		//only start rendering on first gamesate
		if(!running) {
			running = true;
			requestAnimationFrame(render);
		}
	});
};


var render = function() {

	context.clear();

	renderPlayer();

	renderMap();
	
	renderer.render(stage);

	//Rendering seperate from game tick
	requestAnimationFrame(render);
};

var renderPlayer = function() {
	context.lineStyle(0);
	context.beginFill(0xFFFFFF, 1);
	context.drawCircle(gameState.player.x, gameState.player.y, 10);
	context.endFill();
}

var renderMap = function() {
	for(var y=0; y<gameState.map.length; y++) {
		for(var x=0; x<gameState.map[y].length; x++) {
			if(gameState.map[y][x] == 1) {
				context.lineStyle(0);
				context.beginFill(0xFFFFFF, 1);
				context.drawRect(10 * x, 10 * y, 10, 10);
				context.endFill();
			}
		}
	}
}

module.exports = {
	init: init
};
