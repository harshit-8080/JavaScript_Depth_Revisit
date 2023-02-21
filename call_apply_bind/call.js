 /**

    The call() method calls the function with a given "this" value and arguments provided individually.

    call() is almost equivalent to a normal function call, except that we can specify this value and other arguments.
    
*/
 

 const player = {

    firstName:"virat",
    lastName:"kohli",
    numberToBat:3,
  

}

const commonFunction = function() {
    // this.getDetails();

    console.log("firstName = ", this.firstName);
    console.log("lastName = ", this.lastName);
    console.log("NumberToBat = ", this.numberToBat);

}
// commonFunction.call(player);



function fun(x,y){

    console.log(x,y);

    console.log("firstName 1 = ", this.firstName);
    console.log("lastName  2 = ", this.lastName);
    console.log("NumberToBat 3 = ", this.numberToBat);
}

fun.call(player,100,200);