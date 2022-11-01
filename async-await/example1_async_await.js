function createOperation() {

    console.log("inside promise");

    return new Promise((res,rej) =>{

        setTimeout(() => {

            res("true");

        }, 2000);

    })


}

async function createUser() {
    
    let status = await createOperation();

    console.log("User created and status => ", status);

    return status + "false";

}

console.log("start");

createUser()
.then((value)=>{
    console.log("1st then value => ", value);
})

console.log("end");

/**
 
 start
 inside promise
 end



 */