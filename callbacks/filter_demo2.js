const arr = [10, 30, 33, 44, 88, 77, 99, 120, 404];
console.log(arr);


let resultArr = arr.filter((value,index) => {

    if(value >= 88 && value <= 99){
        return value;
    }
})

console.log(resultArr);