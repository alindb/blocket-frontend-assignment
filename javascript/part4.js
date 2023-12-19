var Component = function () {
  this.subscribers = {};
  this.events = {};

  this.subscribe = function (key, callback) {
    if (!this.subscribers[key]) {
      this.subscribers[key] = [];
    }
    this.subscribers[key] = [...this.subscribers[key], callback];

    if (this.events[key]) {
      this.events[key].forEach((event) => callback(event));
    }
  };

  this.unsubscribe = function (key, callback) {
    if (!this.subscribers[key]) return;
    this.subscribers[key] = this.subscribers[key].filter(
      (_callback) => callback !== _callback
    );
  };

  this.publish = function (key, event) {
    if (!this.events[key]) {
      this.events[key] = [];
    }
    this.events[key] = [...this.events[key], event];

    if (!this.subscribers[key]) return;
    this.subscribers[key].forEach(function (callback) {
      callback(event);
    });
  };
};

var CustomComponent = function () {
  Component.call(this);

  this.value = null;

  this.setValue = function (value) {
    if (value === this.value) return;
    var oldValue = this.value;
    this.value = value;
    this.publish("propertyChanged", {
      eventType: "propertyChanged",
      property: "value",
      newValue: value,
      oldValue: oldValue,
    });
  };
};

var instance = new CustomComponent();

function subscriber1(event) {
  console.log("Subscriber 1", event);
}

function subscriber2(event) {
  console.log("Subscriber 2", event);
}

instance.subscribe("propertyChanged", subscriber1);

instance.subscribe("propertyChanged", subscriber2);

instance.setValue(10);

instance.setValue(20);

instance.setValue(20);
