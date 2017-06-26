(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//business logic stuff for a particular module
var Memory = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

Memory.prototype.examplePrototype = function() {
  return 'this is an example prototype method';
};

exports.memory = Memory;

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory.js').memory;

var memoryGame = new Memory('args');

console.log(memoryGame.examplePrototype());

},{"./../js/memory.js":1}]},{},[2]);
