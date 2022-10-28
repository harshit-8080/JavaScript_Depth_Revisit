function fun() {

    return new Promise(function process(resolve, reject) {

        console.log("inside promises");

        setTimeout(() => {
            console.log("inside setTimeout after 3 seconds");

            resolve("done")

        }, 3000);

        console.log("outside setTimeout function");

        
    })
    
}

console.log("program started");
fun();
console.log("program ended");


/**
 if inside your promise, there are sync code, execution will wait to resolve promise.

 if inside your promise, there are async code execution will not wait to resolve promise
 */