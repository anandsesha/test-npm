var moment = require('moment');
const loadash = require("lodash");
// const parcel = require('parcel');

// moment.format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMMM Do YYYY'));

console.log(moment.isDate('2020-01-01'));
console.log(moment.isDate(moment().format('MMMM Do YYYY')));

console.log(moment().isValid('2020-01-01'))
console.log(moment().isValid('2020-14-01'))
console.log(moment().isValid('01-01'))
console.log(moment().calendar())

// Add 7 days to the current date
console.log(moment().add(7,'days'))



let chunkOfArray = loadash.chunk(["Anand","Arvind","Amma","Appa"],2);
console.log(chunkOfArray); 