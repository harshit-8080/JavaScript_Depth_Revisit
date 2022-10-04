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