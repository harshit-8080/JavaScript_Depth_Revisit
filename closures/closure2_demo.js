function fun(){
    let name = "harshit";

    function callback(params) {
        
        console.log(college);
        console.log(name);
    }


    return callback;
}

let x = fun();
x();
var college = "iit delhi";
x();

/**
 
if a function is returned from a function it remember it local scope + parent scope (lexical scope).


 */

