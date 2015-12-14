/*jshint unused:false*/

var container = $('#js-current-time');

module.exports = {
	printTime: function() {
		'use strict';

		var date = new Date(),
				hour = ('0' + date.getHours()).slice(-2),
				minutes = ('0' + date.getMinutes()).slice(-2),
				seconds = ('0' + date.getSeconds()).slice(-2);

		container.html('<h1>' + hour + ' <span class="time-minutes">' + minutes + '</span><span class="time-seconds"> ' + seconds + '</span></h1>');
	},

  init: function() {
  	'use strict';

  	this.printTime();

  	// Update time every second:
  	setInterval(this.printTime, 1000);
  }
};