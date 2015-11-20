var input_handler = {

	init: function() {

		console.log("Initialising input handling service");
		pubsub.create_queue("commands");

		pubsub.subscribe(function(message) {
			pubsub.publish(message, 'commands');
		}, "input");
	}
};
