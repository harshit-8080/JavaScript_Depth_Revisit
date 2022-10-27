function fun(){
    console.log("inside fun function");
    return new Promise(function(resolve,reject){

        console.log("inside promise");

        setTimeout(() => {
            
            console.log("task is done after 2 sec ");
            resolve("promise is resolved ")

        }, 2000);


        console.log("task started");

    })
}

let x = fun();

console.log(x);


/**
 
inside fun function
inside promise
task started
Promise { <pending> }
task is done after 2 sec 



 */