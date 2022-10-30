async function fun(params) {

        return new Promise(function(res,rej){

            res("harshit");
        })


}

async function gun() {

    return new Promise(function(res,rej){

        setTimeout(() => {
            res("harshit")
        }, 3000);
    })


}

console.log("start");

let x = gun();
x.then((value)=>{

    console.log("inside first then => ", value);
    return "raj";
})
.then((value)=>{

    console.log("inside second then => ", value);
})

console.log("end");