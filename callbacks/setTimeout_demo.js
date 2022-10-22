let x1 = setTimeout(function (){

    console.log("task completed 1 ");

},3000);



let x2 = setTimeout(function (){

    console.log("task completed 2 ");

    clearInterval(x1)


},1000);

// console.log(x1);
// console.log(x2);




/**
 *  setTimeOut - first Argument is a callback and second will be time in miliseconds
 *  setTimeout - it executes only one time
 *  setTimeout - it return a object. (we can use this return object to do other stuffs)
 */