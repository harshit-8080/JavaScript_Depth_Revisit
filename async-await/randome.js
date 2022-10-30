function fun() {
    
    return new Promise((res, rej) =>{
        res("scucess");
    })
}

async function as(){
    console.log("start");
    let ans = await 5;
    console.log(ans);
    console.log('end');
}

console.log(as());
console.log("oustide ");
