const Bacon = require('baconjs');

const raf = window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.oRequestAnimationFrame || 
  window.msRequestAnimationFrame || 
  (f => window.setTimeout(f, 1000 / 60));

module.exports = Bacon.fromBinder(function (sink) {
  console.log('starting');
  
  raf(step);
  
  function step(timestamp) {
    sink(timestamp);
    raf(step);
  }
  
  return function unsubscribe() {
    console.log('stopping');
  };
});