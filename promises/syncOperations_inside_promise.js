function fun() {

    return new Promise(function process(resolve, reject) {

        console.log("inside promises");

        for(let i = 0; i<100000; i++){}

        console.log("for loop ended");

        resolve("done")
        
    })
    
}

console.log("program started");
fun();
console.log("program ended");