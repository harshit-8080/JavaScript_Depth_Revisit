/**
 
 Function.prototype.bind()

 bind() -> It returns a bound function with the context which will be invoked later. 

 "bind" method creates a reference of "this" to the object it has been passed.


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
