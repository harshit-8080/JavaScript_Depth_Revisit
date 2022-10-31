function fun(val,fn) {
    
    if(val == 100){
        fn(undefined, "harshit");
    }
    else{
        fun(new Error);
    }
}

fun(100,function fun(err, data){

    if(err != undefined){
        console.log("this is printing inside callback");
        console.log("data => ", data);
    }
    else{
       console.log("err = ", err);
    }
})