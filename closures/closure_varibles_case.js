function fun(params) {
    
    for(var i = 0; i<3; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

// fun();


/**
 
if ->  var i - as it's function scope

if -> let i - as it's block scope

 */

function gun(params) {
    
    for(let i = 0; i<3; i++){
        setTimeout(function(){
            console.log(i);
        },i*2000);
    }
}

// gun();

function sum(params) {
    
    for(var i = 0; i<3; i++){
        let j = i;
        setTimeout(function(){
            console.log(j);
        },i*2000);
    }
}

// sum();


const add = (function name(params) {
    
    //var counter = 0;
    // doesnot matter var or let because it's not creating new blocks
    let counter = 0;
    return function ret(){
    
        counter+=1;

        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());