let x = Promise.resolve("harshit");

x.then((value)=>{
    console.log(value);
})


let y = Promise.reject("error is returned" );

y.catch((value)=>{
    console.log(value);
})