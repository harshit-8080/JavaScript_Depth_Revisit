var a1 = 100;

function f1(){
    var a1 = 1000;
    console.log(a1);
}


let a2 = 100;

function f2(){
    let a2 = 1000;
    console.log(a2);

}

const a3 = 100;

function f3(){
    const a3 = 1000;
    console.log(a3);
}

console.log(a1);
f1();

console.log(a2);
f2();

console.log(a3);
f3();