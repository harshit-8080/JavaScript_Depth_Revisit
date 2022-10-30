function fun(v) {
    
    console.log("starting downloading");

    return new Promise((resolve,reject)=>{
        
        if(v == 10){
            resolve("song downloaded");
        }
        else{
            reject("error while downloading");
        }

    })
}

fun(100)
.then((response)=>{ 
    console.log("resolved and status => ", response);
}, (error)=>{
    console.log("reject and error => ", error);
}).then(()=>{
    console.log("second then");
}).catch(()=>{
    console.log("1st catch function");
});

/**

starting downloading
reject and error =>  error while downloading
second then

 */

// if we you handle error in then callback catch will not be executed;


