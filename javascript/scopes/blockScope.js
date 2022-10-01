{
    let x = 10;
    console.log("inner block = " ,x);
}

//console.log("outer block=" ,x);

{
    var z = 10;
    console.log("inner block =" ,z);
}
console.log("test = ", z);

if(true){
    var c = 100;
}
if(false){
    var d = 100;
}

console.log("line 18 = ", c);
console.log("line 22 = ", d);