function fun() {

    console.log("started");

    setTimeout(() => {
        console.log("inside of 3 second");
    }, 3000);
    

    setTimeout(() => {
        console.log("inside of 1 second");
    }, 1000);

    for(let i = 0; i<100000000; i++){

    }

}

fun();

setTimeout(() => {
    console.log("inside of 0 second");
}, 0);
