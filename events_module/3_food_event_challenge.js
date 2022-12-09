const EventEmitter = require("events");

const myEmitter = new EventEmitter();

placeOrder = function (food) {
  myEmitter.emit("order", food);
  myEmitter.emit("doorbell");
  myEmitter.emit("payment", food);
};

myEmitter.on("order",(food)=>{
    console.log("Order placed for",food);
})

myEmitter.on("doorbell",()=>{
    console.log("RING RING!");
})

myEmitter.on("payment",(food)=>{
    console.log("Enjoy your",food);
})



placeOrder("burger");