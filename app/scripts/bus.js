// TFL API
var api = 'https://api.tfl.gov.uk/StopPoint/490003306W/Arrivals?app_id=683cc8b5&app_key=c8607c3fb964272ff12d0bd730bdeb86';
var container = $('#js-bus-updates');

module.exports = {
	ajaxCall: function(){
		'use strict';

	  $.ajax({
	    url: api,
	    success: function(data) {
	    	this.printStatus(data);
	    },
	    cache: false,
	    printStatus: function(data) {
	    	// Sort the data in ascending order
	    	data.sort(function(a, b) {
				   return parseFloat(a.timeToStation) - parseFloat(b.timeToStation);
				});

	    	// Clear the container for updates
	    	container.empty();

				for (var i = 0; i < data.length; i++){
					// Show no more than 3 entries
					if (i < 3) {
						// Calculate how many minutes are left
						var minsLeft = Math.floor(((new Date(data[i].expectedArrival) - new Date()) / 1000)/60);
						var minsLeftText = minsLeft <= 0 ? '&nbsp;<strong>due</strong>' : minsLeft === 1 ? '&nbsp;in <strong>' + minsLeft + ' minute</strong>' : '&nbsp;in <strong>' + minsLeft + ' minutes</strong>';

						// Print messages
						container.append('<li class="flex-container"><span>The&nbsp;</span><span class="bus-number">' + data[i].lineName + ' </span><span class="bus-destination">&nbsp;to ' + data[i].destinationName.split(',')[0] + ' is </span><span class="bus-time">' + minsLeftText + '</span></li>');
					}
				}
	    }
	  });
	},

  init: function(){
	  'use strict';

	  this.ajaxCall();

	  // Reload ~ every 30 seconds
	  // (the amount of time that the API gets updated):
	  setInterval(this.ajaxCall, 29000);
  }
};
