const s = require("./square.js");
const kk = require("./m.ex.js");
const jj = require("./3_demo.js")

// set your exported function here
var square = s.getS(10);

console.log(square);

console.log(kk(9));

console.log(jj.square(8));

jj.myname("harshit");