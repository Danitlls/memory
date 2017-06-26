(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory.js').memory;

$(document).ready(function() {
  function flashScreen() {
    switch (color) {
      case "#f00": $('body').css('background-color', '#0f0'); color = '#0f0'; break;
      case "#0f0": $('body').css('background-color', '#f00'); color = '#f00'; break;
    }
  }

  var color = "#f00";
  var game = new Memory();

  game.shuffleDeck();

  game.deck.forEach(function(card) {
    $('.container').append('<div class="card" data-id="' + card + '"><span>' + card + '</span></div>');
  });


  $('.card').click(function() {
    $(this).find('span').show();
    $(this).addClass('clicked');
    var clicked = [];
    if ($('.clicked').length === 2) {
      $('.clicked').each(function(card) {
        clicked.push($(this).attr('data-id'));
      });
      if (game.checkForMatch(clicked)) {
        $('.clicked').each(function() {
          $(this).toggleClass('matched clicked');
        });
        if ($('.matched').length === game.deck.length) {
          setInterval(function() {
            flashScreen();
          }, 100);
        }
      } else {
        setTimeout(function() {
          $('.clicked').each(function() {
            $(this).toggleClass('clicked');
            $(this).find('span').hide();
          });
        }, 1000);
      }
    }
  });
});

},{"./../js/memory.js":1}]},{},[2]);
