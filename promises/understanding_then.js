function fun() {
    
    return new Promise(function(resolve,reject){

        console.log("inside promise");

        let data = "Harshit";

        for(let i = 0; i<100000; i++){
            // some logic
        }

        resolve(data);

    })
}

let x = fun();

let y = x.then(function (value) {

    console.log("value returned from this promise is => ", value);
    return "raj";

});

// .then also return promise, in case we don't return any value it's undefined else the return value like here it's returning "raj" as a value;


y.then((value)=>{
    console.log("value returned from y promise => ", value);
})


