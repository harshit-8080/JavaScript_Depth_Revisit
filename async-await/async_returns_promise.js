async function fun(){
    console.log("harshit raj");
    return "123"
}

let x = fun();

x.then((value)=>{

    console.log("return value frrom async function => ", value);
});
