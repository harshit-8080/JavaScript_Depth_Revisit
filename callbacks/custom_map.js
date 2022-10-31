function custom_map(a,callback) {
    
    for(let i = 0; i<a.length; i++){

        callback(a[i]);
    }
}

let a = [10,20,30,40,50,60,70,80,90,100];
let resultArray = [];
let k = 1;

custom_map(a, function(val){

    resultArray.push(val * k);
    k++;

})

for(let i = 0; i<resultArray.length; i++){

    console.log(resultArray[i]);
}