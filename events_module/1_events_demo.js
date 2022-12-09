const EventEmitter = require("events");

const myEventEmitter = new EventEmitter();

function printName(params) {
    console.log("this is  name harshit raj");
}

myEventEmitter.on("e1",printName);



myEventEmitter.emit("e1");
myEventEmitter.emit("e1");
myEventEmitter.emit("e1");