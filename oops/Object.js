let obj = {

    x:100,
    y:200
}

console.log(obj);

Object.freeze(obj); // no modification and not new properties  (LIKE MAKING CONSTANTS)

console.log(obj);

let obj1 = {

    x:100,
    y:200
}

Object.seal(obj1);  // modification is allowed but can't able to add new properties.

obj1.x = 300;

console.log(obj1);

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };

const returnedTarget = Object.assign(target, source);
// const returnedTarget = Object.assign({}, target, source);

console.log(returnedTarget);

for(const o in returnedTarget){

    if(o == 'c'){
        delete returnedTarget[o];
    }
}
console.log(returnedTarget);

let name = "harshit";

for(e in name){
    process.stdout.write(name[e] + " ");
}

console.log();

arr = [10, 3, 5, 78, 79, 70];
for(let i in arr){
    process.stdout.write(arr[i] + " ");
}

console.log();

let sum100 = arr.map((e)=>{
    
    e = e + 100;
    return e;
})

console.log(sum100);

let evenArr = arr.filter((e)=>{
    
    if(e % 2 == 0){
        return e;
    }
})

console.log(evenArr);

console.log(evenArr instanceof Array);

console.log(name instanceof String);