
function fun(params) {
    console.log("started");
    
    let  i = 22;
    setTimeout(() => {
       
        console.log(i);
        console.log("inside setTimeout");
    }, 3000);

    for(let i = 0; i<1000000000; i++){
        
    }
    console.log("ended");
    i = 100;
}

fun();

/**
 
started
ended
100
inside setTimeout


 */