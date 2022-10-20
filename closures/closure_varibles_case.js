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

gun();