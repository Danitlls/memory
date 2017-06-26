//business logic stuff for a particular module
var Memory = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

Memory.prototype.examplePrototype = function() {
  return 'this is an example prototype method';
};

exports.memory = Memory;
