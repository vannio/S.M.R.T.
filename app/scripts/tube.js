// TFL API
var api = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status';
var container = $('#js-tube-updates');

// Pick tube lines of interest
var lines = [
	'circle',
	'hammersmith-city',
	'northern',
	'piccadilly',
	'victoria'
];

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
	    	// Clear the container for updates
	    	container.empty();

	    	// Loop through set of data for each tube line..
	    	for (var i = 0; i < data.length; i++){

					var tubeStatus = data[i].lineStatuses[0].statusSeverityDescription;

	    		// and check if the line matches one of the lines of interest..
	    		if (lines.indexOf(data[i].id) > -1){

	    			// if so, print the line status:
						container.append(
							'<li class="flex-container"><span class="tube-status">' + tubeStatus.charAt(0).toUpperCase() + tubeStatus.slice(1).toLowerCase() + ' on the </span><span class="tube-title tube-' + data[i].id + '">' + data[i].name + ' line</span></li>'
						);
		    	}
	    	}
	    }
	  });
	},

  init: function() {
  	'use strict';

  	this.ajaxCall();

  	// Reload info every 5 mins:
  	setInterval(this.ajaxCall, 300000);

		// Expanding further tube line information if there is any:
		$('body').on('click', '.tube-status', function(){
			$(this).find('.dropdown').slideToggle();
		});
  }
};
