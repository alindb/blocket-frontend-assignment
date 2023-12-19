/* Original Code */
/* var Component = function (config) {
  for (property in config) {
    this[propety] = config[property];
  }
};

var list = Array("Item 1", "Item 2", "Item 3");
var instance = Component(id: "XF-254", list: list);
*/

/* Working Code */
var Component = function (config) {
  for (property in config) {
    this[property] = config[property];
  }
};

var list = Array("Item 1", "Item 2", "Item 3");
var instance = new Component({ id: "XF-254", list });

/* 
Notes:
1. Misspelled property in 'this[propety]'
2. Component should take an object as an argument
3. When creating a new instance of Component, we need to use the 'new' keyword
*/
