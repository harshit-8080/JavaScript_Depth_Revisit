//console.log(a);
function f1(){
    var a = "inside function";
    console.log(a);
}

f1();
//console.log(a);

if(true){
    var b = "inside block";
}

console.log(b);


// when ever we use var in functions, it gets function scope
// and else if we define var in any type of block it gets global scope. 