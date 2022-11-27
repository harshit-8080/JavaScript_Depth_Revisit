 /**

    The apply() method calls the specified function with a given "this" value, and arguments provided as an array

    apply() is almost equivalent to a normal function call, except that we can specify this value and other arguments in a array.

    
*/
 

const player = {

    firstName:"virat",
    lastName:"kohli",
    numberToBat:3,
    getDetails:function() {
        console.log(this.firstName, this.lastName, this.numberToBat);
    }

}

const commonFunction = function() {
    // this.getDetails();

    console.log("firstName = ", this.firstName);
    console.log("lastName = ", this.lastName);
    console.log("NumberToBat = ", this.numberToBat);

}
commonFunction.apply(player);


console.log();


function fun(x,y,z){

    console.log(x+y+z);

    console.log("firstName 1 = ", this.firstName);
    console.log("lastName  2 = ", this.lastName);
    console.log("NumberToBat 3 = ", this.numberToBat);
}

fun.apply(player,[100,200,300]);