/* Copyright (c) 2014 Jarrin van der Velden See the file LICENSE for copying permission. */
/*
	Module handling RTC Clock functions
*/

var Lamps = {
  MY : 0x001,          // description
  PRIVATE : 0x001,     // description
  CONSTANTS : 0x00423  // description
};

function Clock(RTC) {
	this.rtc = RTC;
	
	this.currentState = {
		hours: 0,
		minutes: 0
	}

	this.changeTime(this.rtc.getDateTime());
	this.beat = setInterval(this.tick, 500);
}


Clock.prototype.tick = function()
{
	var date = this.rtc.getDateTime();
	if(this.clock.currentState.hours != date.getHours() || this.clock.currentState.minutes != date.getMinutes())
	{
		this.clock.changeTime(date);
	}
};

Clock.prototype.changeTime = function(date)
{
	this.currentState.hours = date.getHours();
	this.currentState.minutes = date.getMinutes();
	console.log("Tick " + this.currentState.hours + ":" + this.currentState.minutes );
}


exports.init = function (RTC) {
	return new Clock(RTC);
};