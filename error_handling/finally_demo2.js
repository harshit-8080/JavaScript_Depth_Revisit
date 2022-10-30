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

fun(10)
.then((response)=>{ 

    console.log("resolved and status => ", response);
    throw "throwing error"
})
.catch(()=>{

    console.log("1st catch function");
    reject("lll")

}).catch(()=>{

    console.log("2nd catch function");
})
.finally(()=>{
    
    console.log("finally block");
    return 100;

}).then(()=>{
    console.log("3rd then function");
})




