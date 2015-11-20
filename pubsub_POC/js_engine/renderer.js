var renderer = {

	context: {},

	gameState: {},

	init: function() {
		this.context = document.getElementById('canvas').getContext('2d');

		var self = this;

		pubsub.subscribe(function(gameState) {

			//wipe screen
			self.context.beginPath();
			self.context.rect(0, 0, self.context.canvas.width, self.context.canvas.height);
			self.context.fillStyle = 'white';
		    self.context.fill();

		    //request draw of frame
			self.gameState = gameState;
			requestAnimationFrame(function(timestamp) {
				self.context.beginPath();

				console.log(self.gameSate);
		        self.context.rect(self.gameState.player.x * 10,
						        	self.gameState.player.y * 10,
						        	10, 10);
		        self.context.fillStyle = 'black';
		        self.context.fill();
		        self.context.lineWidth = 7;
                self.context.strokeStyle = 'black';
                self.context.stroke();

                var WIDTH = self.context.canvas.width;
                var HEIGHT = self.context.canvas.height;

                var TILE_WIDTH = WIDTH / self.gameState.map[0].length;
                var TILE_HEIGHT = HEIGHT / self.gameState.map.length;

                for(var y=0; y<gameState.map.length; y++) {
                	for(var x=0; x<gameState.map[y].length; x++) {

                		if(self.gameState.map[y][x] == 1) {
                			self.context.beginPath();
							self.context.rect(x * TILE_WIDTH,
						        		  y * TILE_HEIGHT,
						        		  TILE_WIDTH, TILE_HEIGHT);
		       				self.context.fillStyle = 'blue';
		       				self.context.fill();
		       				self.context.lineWidth = 7;
               				self.context.strokeStyle = 'blue';
               				self.context.stroke();
                		}
                	}
                }

                //do we need this???
		        // requestAnimationFrame(self.render);
			});
		}, 'gamestate');
	},
};