async function fun() {
    

    let x = await 100;
    // let x = await Promise.resolve(100);

    console.log(x);

    console.log("inside function");

    return x;
}

console.log("start");

fun().then(()=>{
    console.log("end");
});


// doesnot matter if promise is already resolved or not. if it's already resolved then also
// it just throw outside the function as it asumes it's in pending state.

