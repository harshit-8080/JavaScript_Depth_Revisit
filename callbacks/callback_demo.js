function fun(x,callback){

    for(let i = 0; i<=x; i++){
        console.log(i);
    }


    callback();

}

fun(10,function log (){
    console.log("custom 1 logger");
})

fun(10,function log (){
    console.log("custom 2 logger");
})