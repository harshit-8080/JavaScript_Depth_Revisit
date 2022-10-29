function fetchData(url) {

    return new Promise(function (resolve, reject) {
        
        console.log("downloaded started");

        setTimeout(function(){

            let song = "excuses_song";
            resolve(song);

        },1000);
    })
    
}

console.log("start");

async function fun(){
    let x = await fetchData();

    return "harshit";

}

let x = fun();
x.then((value)=>{
    console.log("namne is =>", value);
})
console.log("end");

setTimeout(function timer1(){
    console.log("timer 1");
}, 2000);