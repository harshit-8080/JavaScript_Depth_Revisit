
let a = "outside function";
function fun(){

    let a = "inside function";
    console.log(a);
}


fun();
console.log(a);

// whenever we define let varibles inside function or any type of block
// it gets block enclosing scope and if we define outside it gets not completely global scope because of ( hoisting)

// let doesnot allow redeclaration but var allow it.

var ab = "declare";
var ab = "redeclare";

console.log(ab);

let ac = "declare";
// let ac = "redeclare"; - Redeclaration

console.log(ab);