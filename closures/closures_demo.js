function fun(task){

        setTimeout(function(){
            console.log("printing",task);
        },2000);
}

console.log("starting");

fun("task1");

console.log("ending");


/**
 
output will be

starting
ending
printing task1

but how this task1 is printing as fun() was is done.
 

*/