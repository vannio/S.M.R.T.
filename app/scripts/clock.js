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

var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth(),
		weekday = date.getDay(),
		day = date.getDate(),
		hour = ('0' + date.getHours()).slice(-2),
		minutes = ('0' + date.getMinutes()).slice(-2);

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
	printDate: function() {
		dateContainer.append(weekdayNames[weekday] + ' ' + day + '<sup>' + nth(day) + '</sup> ' + monthNames[month]);
	},

	printTime: function() {
		timeContainer.html('<h1>' + hour + ':<span class="time-minutes">' + minutes + '</span></h1>');
	},

  init: function() {
		this.printDate();
  	this.printTime();

  	// Update time every 10seconds:
  	setInterval(this.printTime, 10000);
  }
};
