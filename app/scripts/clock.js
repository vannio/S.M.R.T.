/*jshint unused:false*/
'use strict';

var weekdayNames = [
  'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

var monthNames = [
  'January',
	'February',
	'March',
  'April',
	'May',
	'June',
	'July',
  'August',
	'September',
	'October',
  'November',
	'December'
];

var dateContainer = $('#js-current-date');
var timeContainer = $('#js-current-time');

function nth(date) {
  if (date > 3 && date < 21) {
		return 'th';
	}

	switch (date % 10) {
    case 1:  return 'st';
    case 2:  return 'nd';
    case 3:  return 'rd';
    default: return 'th';
  }
}

module.exports = {
	printDate: function(date) {
    var year = date.getFullYear(),
    		month = date.getMonth(),
    		weekday = date.getDay(),
    		day = date.getDate();

    dateContainer.empty().append(weekdayNames[weekday] + ' ' + day + '<sup>' + nth(day) + '</sup> ' + monthNames[month]);
	},

	printTime: function(date) {
    // var hour = ('0' + date.getHours()).slice(-2),
    var hour = date.getHours() % 12 || 12,
    		minutes = ('0' + date.getMinutes()).slice(-2),
        seconds = ('0' + date.getSeconds()).slice(-2),
        meridiem = date.getHours() >= 12 ? 'pm' : 'am';

		timeContainer.empty().append('<h1>' + hour + ':<span class="time-minutes">' + minutes + '</span><span class="time-seconds">:' + seconds + '</span>' + meridiem + '</h1>');
	},

  init: function() {
    var self = this;

		self.printDate(new Date());
  	self.printTime(new Date());

  	// Update time every 10seconds:
  	setInterval(function(){
      self.printDate(new Date());
      self.printTime(new Date());
    }, 1000);
  }
};
