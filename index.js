var moment = require('moment');
const loadash = require("lodash");
// const parcel = require('parcel');

// moment.format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMMM Do YYYY'));

console.log(moment.isDate('2020-01-01'));
console.log(moment.isDate(moment().format('MMMM Do YYYY')));


let chunkOfArray = loadash.chunk(["Anand","Arvind","Amma","Appa"],2);
console.log(chunkOfArray); 