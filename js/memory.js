//business logic stuff for a particular module
var Memory = function() {
  this.deck = [1,2,3,4,5,1,2,3,4,5];
};

Memory.prototype.shuffleDeck = function() {
  var currentIndex = this.deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }

  return this.deck;
};

Memory.prototype.checkForMatch = function(values) {
  return values[0] === values[1];
}

exports.memory = Memory;
