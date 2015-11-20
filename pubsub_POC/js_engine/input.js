var input = {

    init: function() {

        console.log("Initialising input service");

        pubsub.create_queue("input");

        window.onkeydown = function(event) {
            pubsub.publish("down " + keycodes[event.keyCode], "input");
        };

        window.onkeyup = function(event) {
            pubsub.publish(keycodes[event.keyCode], "input");
        };
    },
};

var keycodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'space',

    65: 'left',
    87: 'up',
    83: 'down',
    68: 'right'
};