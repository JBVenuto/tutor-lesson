// Original time that things are based on
var firstTime = "06:00";
// time formated 
var firstTimeFormat = moment(firstTime, "hh:mm");
// frequency of which the event (train arriving) occurs
var freq = 29;
// current time
var current = moment().format("MM/DD/YY hh:mm");

// Difference between the current time and the original time in minutes
var diffTime = moment().diff(moment(firstTimeFormat), "minutes");
console.log(diffTime);

// Amount of time (in minutes) since the last event occured
var last = diffTime % freq;
// Amount of time until the next event occurs
var next = freq - last;
console.log(`last train was ${last} minutes ago`);
console.log(`next train is in ${next} minutes`);

// The time at which the next event will occur
var nextTime = moment().add(next, "minutes").format("hh:mm");
console.log(`next arrival: ${nextTime}`);