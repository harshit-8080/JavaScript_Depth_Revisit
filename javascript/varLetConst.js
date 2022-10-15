var a1 = 100;

function f1(){
    var a1 = 1000;
    console.log(a1);
}
if(true){
    var c1 = 8000;
    console.log(c1);
}


let a2 = 100;

function f2(){
    let a2 = 1000;
    console.log(a2);
    // if(true){
    //     let c2 = 8000;
    //     console.log(c2);
    // }

}
if(true){
    let c2 = 8000;
    console.log(c2);
}

const a3 = 100;

function f3(){
    const a3 = 1000;
    console.log(a3);
    // if(true){
    //     const c3 = 8000;
    //     console.log(c3);
    // }
}
if(true){
    const c3 = 8000;
    console.log(c3);
}

console.log(a1);
f1();
console.log(c1);

console.log(a2);
f2();
//console.log(c2);

console.log(a3);
f3();
//console.log(c3);