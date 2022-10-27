function fun(url) {
    
    return new Promise(function process(resolve,reject) {
        
        console.log("hello");
        console.log("bye");

        resolve("harshit");
    })
}


console.log(fun("google.com"));



/**
 
Q.  How to create promise

step 1 :-   call promise constructor.
step 2 :-   pass a callback in promise constructor.
step 3 :-   this callback expects two argument -> resolve and reject.
step 4 :-   this is resolve and reject arguments are functions and we can call them.
step 5 :-   afte logic inside callback, we can call resolve or reject.

 */