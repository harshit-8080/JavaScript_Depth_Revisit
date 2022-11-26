function fun() {
    
    this.name = "harshit";
}

// console.log(fun.prototype);

fun.prototype.p1 = function p1() {
    
    console.log("this is my name ", this.name);
}

const f1 = new fun();

f1.p1();

f1.__proto__.p2 = function fff(params) {
    
    console.log("this is p2");
} 

f1.p2();

const f2 = new fun();


console.log(f2.__proto__);





const obj = {
    
    display: function fun(params) {

        console.log("this is line 19");
    }
}

const obj2 = {}

console.log("result ===>> ", obj.__proto__ == Object.prototype); // true

obj2.__proto__ = obj;

obj2.display();


console.log("------");

console.log(Object.prototype);

console.log(Object.__proto__);