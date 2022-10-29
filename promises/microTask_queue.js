console.log("started");

setTimeout(() => {
    console.log("timer 1 ");
}, 0);


let x = Promise.resolve("harshit");
x.then((value)=>{
    console.log(value);
})


// callback inside .then will go to microtask queue not event queue.
// when this is callback will go to microtask queue ?? --> They will go when promise is resolved or status is fullfilled
// priority of microtask queue is higher than event queue.


setTimeout(() => {
    console.log("timer  2");
}, 0);

console.log("end of the file");
