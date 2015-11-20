var pubsub = {
    
    queues: {},

    init: function(queues) {
        console.log("Initialising Message Exchange");
        for(var i=0; i<queues.length; i++) {
            this.create_queue(queues[i]);
        }
    },

    publish: function(message, queue) {
        console.log(message);
        this.queues[queue].process_message(message);
    },

    subscribe: function(func, queue) {
        this.queues[queue].register(func);
    },

    create_queue: function(name) {
        this.queues[name] = new Queue(name);
    }
};

var Queue = function(name) {
    this.listeners = [];
    this.name = name;
};

Queue.prototype.register = function(func) {
    this.listeners.push(func);
};

Queue.prototype.process_message = function(message) {
    for(var i = 0; i < this.listeners.length; i ++) {
        (this.listeners[i])(message);
    }
};
