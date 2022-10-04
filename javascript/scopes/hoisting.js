gun();

var x;

function gun() {
    console.log(x);
    console.log("hello from gun !");
}

console.log(x);
x = 10;
console.log(x);
gun();



// hoisting is a direct consequence of lexical parsing,
// where we access function and variables even before initializing it.
// which gives a notion that they are moved up.
