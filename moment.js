const moment = require('moment');

let date = new Date();
let a = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log("date", date);
console.log("a", a);