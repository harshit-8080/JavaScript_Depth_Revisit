async function fun() {
    
    return new Promise((resolve,reject)=>{

        resolve("harshit")
    }) 

}


let x = fun();

x.then((value)=>{

    console.log("inside 1st then value => ", value);
})

x.then((value)=>{

    console.log("inside 2nd then value => ", value);

})

x.then((value)=>{

    console.log("inside 3rd then value => ", value);

})

// We can register multiple ".then" function in onfullfillment array.

