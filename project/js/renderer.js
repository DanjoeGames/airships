events = require('./pubsub');
pixi = require('pixi.js');

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
	context.lineStyle(0);
	context.beginFill(0xFFFFFF, 1);
	context.drawCircle(gameState.player.x, gameState.player.y, 10);
	context.endFill();
	
	renderer.render(stage);

	//Rendering seperate from game tick
	requestAnimationFrame(render);
};

module.exports = {
	init: init
};
