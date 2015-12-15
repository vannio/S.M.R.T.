'use strict';

var clock = require('./clock.js');
		clock.init();

var weather = require('./weather.js');
		weather.init();

var bus = require('./bus.js');
		bus.init();

var tube = require('./tube.js');
		tube.init();


// // Find the right method, call on correct element
// function launchIntoFullscreen(element) {
// //   if(element.requestFullscreen) {
// //     element.requestFullscreen();
// //   } else if(element.mozRequestFullScreen) {
// //     element.mozRequestFullScreen();
// //   } else if(element.webkitRequestFullscreen) {
// //     element.webkitRequestFullscreen();
// //   } else if(element.msRequestFullscreen) {
// //     element.msRequestFullscreen();
// //   }
// }

// // Launch fullscreen for browsers that support it!
// // launchIntoFullscreen(document.documentElement); // the whole page
// // launchIntoFullscreen(document.getElementById('js-content'));

// document.getElementById('js-fullscreen').onclick = launchIntoFullscreen(document.documentElement);

document.getElementById('js-fullscreen').onclick = function(){
	document.body.webkitRequestFullscreen();
};
		