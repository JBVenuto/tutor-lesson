var firstTime = "06:00";
var firstTimeFormat = moment(firstTime, "hh:mm");
var freq = 29;
var current = moment().format("MM/DD/YY hh:mm");


console.log(current);
// console.log(firstTimeFormat);

// console.log(moment().add(30, "m"));

var diffTime = moment().diff(moment(firstTimeFormat), "minutes");
console.log(diffTime);

var last = diffTime % freq;
var next = freq - last;
console.log(`last train was ${last} minutes ago`);
console.log(`next train is in ${next} minutes`);

var nextTime = moment().add(next, "minutes").format("hh:mm");
console.log(`next arrival: ${nextTime}`);