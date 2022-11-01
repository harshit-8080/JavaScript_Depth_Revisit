function fun(val) {
    
    return new Promise((resolve,reject) =>{

       // resolve("manikesh");

        console.log("inside promise");

        if(val == 1){

            resolve("harshit");

        }
        else if(val == 2){

            resolve("raj");
        }
        else{

            reject("promise is rejected")
        }
    })


}

console.log("START");

let x = fun(89);

x.then((value)=>{

    console.log("1st then value = ", value);

}).catch((error)=>{

    console.log("this is catch => ", error);
    return 800;

}).then((value)=>{

    console.log("2nd then value => ", value);
    
})

console.log("END");