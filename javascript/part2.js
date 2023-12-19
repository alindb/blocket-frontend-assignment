var Component = function () {
  this.subscribers = {};

  this.subscribe = function (key, callback) {
    if (!this.subscribers[key]) {
      this.subscribers[key] = [];
    }
    this.subscribers[key] = [...this.subscribers[key], callback];
  };

  this.unsubscribe = function (key, callback) {
    if (!this.subscribers[key]) return;
    this.subscribers[key] = this.subscribers[key].filter(
      (_callback) => callback !== _callback
    );
  };

  this.publish = function (key, event) {
    if (!this.subscribers[key]) return;
    this.subscribers[key].forEach(function (callback) {
      callback(event);
    });
  };
};

var instance = new Component();

function subscriber1(event) {
  console.log("Subscriber 1", event);
}

function subscriber2(event) {
  console.log("Subscriber 2", event);
}

function subscriber3(event) {
  console.log("Subscriber 3", event);
}

instance.subscribe("propertyChanged", subscriber1);

instance.subscribe("user.loggedOut", subscriber2);

instance.subscribe("user.loggedOut", subscriber3);

eventBus.unsubscribe("user.loggedOut", subscriber3);

instance.publish("propertyChanged", "Property changed");

instance.publish("user.loggedOut", "User logged out");
