var game = {

	player: {},

	map: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,1,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,1,1,1,1,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	],

	init: function() {
		this.player = new Entity(10, 10);

		var self = this;

		pubsub.create_queue("gamestate");

		pubsub.subscribe(function(message) {
			self.player.move(message, 1);

			var gamestate = {
				player: self.player,
				map: self.map
			};

			pubsub.publish(gamestate, 'gamestate');
		}, 'commands');
	}
}
