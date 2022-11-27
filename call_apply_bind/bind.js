/**
 
 Function.prototype.bind()

 bind() -> It returns a bound function with the context which will be invoked later. 

 "bind" method creates a reference of "this" to the object it has been passed.

 The call() and apply() were introduced in ECMAScript 3 while bind() was added as a part of ECMAScript 5.

 */

const player = {

    firstName:"virat",
    lastName:"kohli",
    numberToBat:3,
    getDetails:function() {
        console.log(this.firstName, this.lastName, this.numberToBat);
    }

}

const commonFunction = function(params) {
    this.getDetails();
}

let x = commonFunction.bind(player);

x();



function fun(x,y){

    console.log(x,y);

    console.log("firstName 1 = ", this.firstName);
    console.log("lastName  2 = ", this.lastName);
    console.log("NumberToBat 3 = ", this.numberToBat);
}


let y = fun.bind(player, 100, 200);

y();
