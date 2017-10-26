// get hasOwnProperty func

var hasOwn = Object.prototype.hasOwnProperty;
// or
// var hasOwn = {}.hasOwnProperty;

var dict = {};

dict.alice = 24;

hasOwn.call(dict, 'alice'); // true
hasOwn.call(dict, 'hasOwnProperty'); // false

dict.hasOwnProperty = 10

hasOwn.call(dict, 'alice'); // true
hasOwn.call(dict, 'hasOwnProperty'); // true
