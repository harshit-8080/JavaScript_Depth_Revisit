console.log(undefined == null);
console.log(null == undefined);

console.log(undefined === null);
console.log(null === undefined);

console.log(100 == "hello");
console.log("hello" == 100);

console.log(100 == '100');
console.log('100' == '100');

console.log('99' == 99);

console.log(false == 0);
console.log(true == 100);
console.log(true == 1);

console.log(10 == {a:100});
console.log(10 == { valueOf() { return 10}});

console.log(100 == NaN);
console.log(100 == undefined);
console.log(100 == null);

a = 5;
if(a == true){
    console.log("if");
}
else{
    console.log("else");
}