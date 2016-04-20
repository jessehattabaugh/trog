'use strict';

const Bacon = require('baconjs');

const frames = require('./frames');
//frames.log();
frames.subscribe(require('./draw'));

const gamepads = Bacon.fromEvent(window, 'GamepadEvent' in window ? 'gamepadconnected' : 'webkitgamepadconnected');
gamepads.subscribe(function () {
  console.log(arguments);
});

console.info('done');

