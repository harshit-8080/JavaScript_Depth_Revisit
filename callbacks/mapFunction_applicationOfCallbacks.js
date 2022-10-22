let arr = [10,20,30,40,50];

let x = arr.map(function process(v,i){

    return v**3;


    /**
     *  v -> element of array (one by one)
     *  i -> index of array
     * 
     */
  
})

let y = arr.map((v,i) => {return v**2});



console.log(arr);
console.log(x);


console.log(arr);
console.log(y);


let array = [100,200,300,400,500];

let result = array.map(function(value,index) {
    let ele = value + index;
    return ele;
})

console.log(result);


let stringArray = ["harshit","manikesh"];
const parentName = "Madan Mohan Singh";

let stringResult = stringArray.map(function(value,index) {
    let ele = value + " is son of " + parentName;

    return ele;
})


console.log(stringResult);