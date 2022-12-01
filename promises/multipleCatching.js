console.log("start");

function fun() {
   
   console.log("inside func function");

   return new Promise(function callback(resolve, reject) {
       
       resolve("this is an error")

   })
}

let x = fun();


x.catch((v)=>{
    console.log("catch 18 = ", v);

    throw v + " added";

}).catch((e)=>{

    console.log("catch 34 = ", e);
    
}).finally(()=>{

    console.log("finally");
})



// finally also returns a promise! Proof below

let z = x.finally((v)=>{

    console.log("line 30 ", v);
})

console.log("z = ", z); // z =  Promise { <pending> }


console.log("end");


// onFullFillMent [fun1(), fun2(), fun3()] = What , when you use it, how you use it