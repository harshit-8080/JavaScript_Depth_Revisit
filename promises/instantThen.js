// let x = new Promise((resolve,reject) =>{
//     resolve(100);
// })

let x = Promise.resolve(100);

x.then(()=>{

    console.log("1st promise is resolved");

}).then(()=>{

    console.log("3rd promise is resolved");

})


console.log("harshit");


function fun(){

    return new Promise((resolve, reject)=>{

        resolve(200);

    })
}

async function f1(){

    let x = await fun();

    console.log("inside async function");
    
}


console.log("start");

f1()
.then(()=>{

    console.log("2nd promise is resolved");

})

console.log("end");



/**
 
 harshit
 start
 end
 1st promise is resolved
 inside async function
 2nd promise is resolved


 */