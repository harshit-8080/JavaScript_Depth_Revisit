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
}).then(()=>{
    console.log("3rd then");
}).then(()=>{
    console.log("4th then");
}).catch(()=>{
    console.log("2nd catch function");
})

/**

starting downloading
reject and error =>  error while downloading
second then
3rd then
4th then

 */

// if we you handle error in then callback catch will not be executed
// but if we throw any error from then function and if we handle with catch block it'll be handled



